import * as actionType from '../actions/types'


const invoiceReducer = (state = {
  list: [],
  selected: {date: null, items: [], total: 0, subTotal: 0, iva: 0, name: "", number: "", retention: true},
  filter: ""
}, action) => {
  switch (action.type) {
    case actionType.FILTER_INVOICES:
      return {
        ...state,
        filter: action.payload
      };
    case actionType.FETCH_INVOICES_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case actionType.FETCH_INVOICE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        selected: action.payload
      };
    case actionType.SELECT_INVOICE:
      return {
        ...state,
        selected: state.list.filter(e => {
          return e.id === action.payload
        })[0]
      };
    case actionType.ADD_ITEM_TO_INVOICE:
      var newItems = [...state.selected.items, action.payload];
      return {
        ...state,
        selected: {
          ...state.selected,
          items: newItems
        }
      };
    case actionType.CHANGE_ITEM_AMOUNT:
      var index = action.payload.index;
      var item = state.selected.items[index];
      item.amount = action.payload.val;

      var newItems = [...state.selected.items.slice(0, index),
                      item,
                      ...state.selected.items.slice(index+1)];
      return {
        ...state,
        selected: {
          ...state.selected,
          items: newItems,
          ...sumInvoiceItems(newItems)
        }
      };
    case actionType.CHANGE_INVOICE_RETENTION:
      return {
        ...state,
        selected: {
          ...state.selected,
          retention: !state.selected.retention
        }
      };
    case actionType.CHANGE_ITEM_DETAIL:
      var index = action.payload.index;
      var item = state.selected.items[index];
      item.detail = action.payload.val;

      var newItems = [...state.selected.items.slice(0, index),
        item,
        ...state.selected.items.slice(index+1)];
      return {
        ...state,
        selected: {
          ...state.selected,
          items: newItems
        }
      };
    case actionType.DELETE_ITEM:
      var index = action.payload.index;
      var newItems = [...state.selected.items.slice(0, index), ...state.selected.items.slice(index+1)];
      return {
        ...state,
        selected: {
          ...state.selected,
          items: newItems,
          ...sumInvoiceItems(newItems)
        }
      };
    case actionType.CHANGE_INVOICE_NAME:
      return {
        ...state,
        selected: {
          ...state.selected,
          name: action.payload.val
        }
      };
    case actionType.CHANGE_INVOICE_NUMBER:
      return {
        ...state,
        selected: {
          ...state.selected,
          number: action.payload.val
        }
      };
    case actionType.CHANGE_INVOICE_DATE:
      return {
        ...state,
        selected: {
          ...state.selected,
          date: action.payload.val
        }
      };
    case actionType.SAVE_INVOICE:
      return {
        ...state,
        selected: {
          ...state.selected,
          number: action.payload.val
        }
      };
    default:
      return state
  }
};


function sumInvoiceItems(items) {
  var subTotal = 0;
  if (items.length == 1) {
    subTotal = items[0].amount;
  } else if (items.length > 1) {
    subTotal = items.map((i) => i.amount)
      .reduce((a, b) => {
        if (b !== "" && !isNaN(b)) {
          return Number(a) + Number(b);
        } else {
          return Number(a);
        }
      }, 0);
  }
  subTotal = Number(subTotal);
  var iva = subTotal * 0.22;
  var total = subTotal + iva;
  total = Number(total).format(2);
  subTotal = Number(subTotal).format(2);
  iva = Number(iva).format(2);
  return {subTotal, iva, total};
}

Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

export default invoiceReducer;
