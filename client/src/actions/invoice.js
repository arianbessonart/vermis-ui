import * as actionType from './types'
import axios from 'axios'
import {browserHistory} from 'react-router';

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

export function changeNameInvoiceAction(val) {
  return {
    type: actionType.CHANGE_INVOICE_NAME,
    payload: {val}
  }
}

export function changeNumberInvoiceAction(val) {
  return {
    type: actionType.CHANGE_INVOICE_NUMBER,
    payload: {val}
  }
}

export function changeDateInvoiceAction (val) {
  return {
    type: actionType.CHANGE_INVOICE_DATE,
    payload: {val}
  }
}


export function createInvoiceAction(invoice, client) {
  invoice.client = client._id;
  return function (dispatch) {
    axios({
      method: "post",
      url: "http://localhost:8081/api/invoices/",
      data: invoice
    }).then((response) => {
      browserHistory.push('/invoices');
      dispatch({
        type: actionType.CREATE_INVOICE_SUCCESS,
        payload: response.data
      });
    });
  }
}

export function chargeInvoiceAction(invoiceId, date) {
  return function (dispatch) {
    axios({
      method: "put",
      url: "http://localhost:8081/api/invoices/"+invoiceId+"/status/charged",
      data: {date}
    }).then((response) => {
      dispatch(fetchInvoicesAction());
    });
  }
}

export function updateInvoiceAction(invoice) {
  return function (dispatch) {
    axios({
      method: "put",
      url: "http://localhost:8081/api/invoices/"+invoice._id,
      data: invoice
    }).then((response) => {
      browserHistory.push('/invoices');
      dispatch({
        type: actionType.CREATE_INVOICE_SUCCESS,
        payload: response.data
      });
    });
  }
}

export function changeRetentionInvoiceAction() {
  return {
    type: actionType.CHANGE_INVOICE_RETENTION,
    payload: null
  }
}

export function filterInvoicesAction(val) {
  return {
    type: actionType.FILTER_INVOICES,
    payload: val
  }
}

