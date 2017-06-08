import { createSelector } from 'reselect';
import * as _ from 'lodash';

const getUsers = state => state.api.getIn(['users', 'results']).toJS();
const getUserOrder = state => state.api.getIn(['users', 'selectors', 'order']);

export const sortUsersBySaldo = createSelector(
  [getUsers, getUserOrder],
  (users, order) => _.orderBy(users, ['saldo'], [order])
);
