import * as actionType from '../actions/types'


const invoiceReducer = (state = {
  list: [],
  selected: {},
  current: {}
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
    case actionType.CHANGE_AMOUNT_PRODUCT:
      return {
        ...state,
        selected: state.list.filter(e => {
          return e.id === action.payload
        })[0]
      };
    default:
      return state
  }
};

export default invoiceReducer;
