import { createSelector } from 'reselect';


const invoiceSelector = state => state.invoice.list;
const invoiceSelectedSelector = state => state.invoice.selected;
const invoiceFilterSelector = state => state.invoice.filter;


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

export const getFilter = createSelector(
  [invoiceFilterSelector],
  (filter) => {
    return filter;
  }
);

export const getFilteredList = createSelector(
  [invoiceSelector, invoiceFilterSelector],
  (list, filter) => {
    var filterLc = filter.toLowerCase();
    return list.filter((item) => item.name.toLowerCase().indexOf(filterLc) !== -1 || item.client.name.toLowerCase().indexOf(filterLc) !== -1 ||
                        item.number.toString().indexOf(filterLc) !== -1);
  }
);
