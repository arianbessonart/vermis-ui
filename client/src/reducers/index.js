import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import invoiceReducer from './invoice'
import clientReducer from './client'


const reducerApp = combineReducers({
  routing: routerReducer,
  invoice: invoiceReducer,
  client: clientReducer
});

export default reducerApp;
