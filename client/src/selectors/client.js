import { createSelector } from 'reselect';

const clientSelector = state => state.client.list;
const clientSelectedSelector = state => state.client.selected;

export const getAllClients = createSelector(
  [clientSelector],
  (clients) => {
    return clients
  }
);

export const getSelectedClient = createSelector(
  [clientSelectedSelector],
  (client) => {
    return client
  }
);
