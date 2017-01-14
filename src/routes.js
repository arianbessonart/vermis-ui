import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import InvoiceHome from './invoice/';
import InvoiceForm from './invoice/form';

import NotFoundPage from './shared/components/NotFoundPage'

const routes = (
  <Route path='/' component={App}>
    <Route path='invoices' component={InvoiceHome} />
    <Route path='invoices/new' component={InvoiceForm} />
    <Route path='clients' component={InvoiceForm} />
    <Route path='invoices/edit/:invoiceId' component={InvoiceForm} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);


export default routes;
