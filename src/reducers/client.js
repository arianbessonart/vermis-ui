import * as actionType from '../actions/types'


const clientReducer = (state = {
  list: [],
  selected: {}
}, action) => {
  switch (action.type) {
    case actionType.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case actionType.SELECT_CLIENT:
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

export default clientReducer;
