import * as actionType from './types'
import axios from 'axios'

export function fetchInvoicesAction() {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://localhost:8081/api/invoices"
    }).then((response) => {
      dispatch({
        type: actionType.FETCH_INVOICES_SUCCESS,
        payload: response.data
      });
    });
  }
}
