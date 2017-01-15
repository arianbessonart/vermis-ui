import { createSelector } from 'reselect';


const invoiceSelector = state => state.invoice.list;


export const getAll = createSelector(
  [invoiceSelector],
  (invoices) => {
    return invoices
  }
);
