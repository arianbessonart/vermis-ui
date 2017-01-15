import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import InvoiceHome from './invoice/home';
import InvoicePage from './invoice/invoice';

import NotFoundPage from './shared/components/NotFoundPage'

const routes = (
  <Route path='/' component={App}>
    <Route path='invoices' component={InvoiceHome} />
    <Route path='invoices/new' component={InvoicePage} />
    <Route path='clients' component={InvoicePage} />
    <Route path='invoices/edit/:invoiceId' component={InvoicePage} />
    <Route path='invoices/:invoiceId' component={InvoicePage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);


export default routes;
