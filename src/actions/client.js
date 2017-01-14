import * as actionType from './types'
import axios from 'axios'

export function fetchClientsAction() {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://demo5871819.mockable.io/clients"
    }).then((response) => {
      dispatch({
        type: actionType.FETCH_CLIENTS_SUCCESS,
        payload: response.data
      });
    });
  }
}
