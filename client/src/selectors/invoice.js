import { createSelector } from 'reselect';


const invoiceSelector = state => state.invoice.list;
const invoiceSelectedSelector = state => state.invoice.selected;
const invoiceNewSelector = state => state.invoice.newInvoice;


export const getAll = createSelector(
  [invoiceSelector],
  (invoices) => {
    return invoices;
  }
);

export const getSelected = createSelector(
  [invoiceSelectedSelector],
  (selectedInvoice) => {
    return selectedInvoice;
  }
);


export const getNewInvoice = createSelector(
  [invoiceNewSelector],
  (newInvoice) => {
    return newInvoice;
  }
);
