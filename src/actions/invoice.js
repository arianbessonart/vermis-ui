import * as actionType from './types'
import axios from 'axios'

export function fetchInvoicesAction() {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://demo5871819.mockable.io/invoices"
    }).then((response) => {
      dispatch({
        type: actionType.FETCH_INVOICES_SUCCESS,
        payload: response.data
      });
    });
  }
}
