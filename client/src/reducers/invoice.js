import * as actionType from '../actions/types'


const invoiceReducer = (state = {
  list: [],
  selected: {},
  newInvoice: {client: null, date: null, items: [], total: 0, subTotal: 0, iva: 0}
}, action) => {
  switch (action.type) {
    case actionType.FETCH_INVOICES_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case actionType.SELECT_INVOICE:
      return {
        ...state,
        selected: state.list.filter(e => {
          return e.id === action.payload
        })[0]
      };
    case actionType.ADD_ITEM_TO_INVOICE:
      var newItems = [...state.newInvoice.items, action.payload];
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items: newItems
        }
      };
    case actionType.CHANGE_ITEM_AMOUNT:
      var index = action.payload.index;
      var item = state.newInvoice.items[index];
      item.amount = action.payload.val;

      var newItems = [...state.newInvoice.items.slice(0, index),
                      item,
                      ...state.newInvoice.items.slice(index+1)];
      var subTotal = sumInvoiceItems(newItems);
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items: newItems,
          total: subTotal
        }
      };
    case actionType.CHANGE_ITEM_DETAIL:
      var index = action.payload.index;
      var item = state.newInvoice.items[index];
      item.detail = action.payload.val;

      var newItems = [...state.newInvoice.items.slice(0, index),
        item,
        ...state.newInvoice.items.slice(index+1)];
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items: newItems
        }
      };
    case actionType.DELETE_ITEM:
      var index = action.payload.index;
      var newItems = [...state.newInvoice.items.slice(0, index), ...state.newInvoice.items.slice(index+1)];
      console.log(newItems);
      return {
        ...state,
        newInvoice: {
          ...state.newInvoice,
          items: newItems,
          total: sumInvoiceItems(newItems)
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
          return parseFloat(a) + parseFloat(b);
        } else {
          return parseFloat(a);
        }
      }, 0);
  }
  return subTotal;
}

export default invoiceReducer;
