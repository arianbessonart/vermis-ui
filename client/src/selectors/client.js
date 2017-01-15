import { createSelector } from 'reselect';

const clientSelector = state => state.client.list;

export const getAllClients = createSelector(
  [clientSelector],
  (clients) => {
    return clients
  }
);
