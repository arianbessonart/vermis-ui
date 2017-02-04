import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import InvoiceHome from './invoice/InvoiceHome';
import InvoiceCreate from './invoice/InvoiceCreate';
import InvoiceEdit from './invoice/InvoiceEdit';
import InvoiceView from './invoice/InvoiceView';

import NotFoundPage from './shared/components/NotFoundPage'

const routes = (
  <Route path='/' component={App}>
    <Route path='invoices' component={InvoiceHome} />
    <Route path='invoices/new' component={InvoiceCreate} />
    <Route path='clients' component={InvoiceCreate} />
    <Route path='invoices/edit/:invoiceId' component={InvoiceEdit} />
    <Route path='invoices/:invoiceId' component={InvoiceView} />
    {/*<Route path='*' component={NotFoundPage} />*/}
  </Route>
);


export default routes;
