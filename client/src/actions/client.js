import * as actionType from './types'
import axios from 'axios'

export function fetchClientsAction() {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://localhost:8081/api/clients"
    }).then((response) => {
      dispatch({
        type: actionType.FETCH_CLIENTS_SUCCESS,
        payload: response.data
      });
    });
  }
}

export function selectClientAction(id) {
  return {
    type: actionType.SELECT_CLIENT,
    payload: id
  }
}

