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

export function fetchInvoiceAction(id) {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://localhost:8081/api/invoices/"+id
    }).then((response) => {
      dispatch({
        type: actionType.FETCH_INVOICE_SUCCESS,
        payload: response.data
      });
    });
  }
}

export function addItemInvoiceAction(item) {
  return {
    type: actionType.ADD_ITEM_TO_INVOICE,
    payload: item
  }
}

export function changeAmountItemInvoiceAction(index, val) {
  return {
    type: actionType.CHANGE_ITEM_AMOUNT,
    payload: {index, val}
  }
}

export function changeDetailItemInvoiceAction(index, val) {
  return {
    type: actionType.CHANGE_ITEM_DETAIL,
    payload: {index, val}
  }
}

export function deleteItemInvoiceAction(index) {
  return {
    type: actionType.DELETE_ITEM,
    payload: {index}
  }
}
