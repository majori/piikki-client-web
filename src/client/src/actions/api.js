// @flow
import { Moment } from 'moment';
import { createActions } from 'redux-actions';
import * as _ from 'lodash';
import * as api from '../services/api';

const actions = createActions({
  REQUEST: (target: string) => target,
  RECEIVE: (target: string) => target,

  USERS: {
    GET: (users: User[]) => users,
  },

  USER: {
    GET: (user: User) => user,
  },

  AUTHENTICATION: {
    POST: auth => auth,
  },

  TRANSACTION: {
    POST: (username: string, amount: number) => ({ username, amount }),
  },

  GROUP_SALDOS: {
    GET: (saldos: any) => saldos,
  },

  GROUP: {
    GET: (group: any) => group,
  }
});

export default actions;

function apiActionFactory(target: string, request: Promise<any>, method: string = 'get') {
  return async (dispatch: Function) => {
    dispatch(actions.request(target));

    const req = await request;
    dispatch(_.get(actions, [target, method])(req));

    dispatch(actions.receive(target));
    return req;
  };
}

export function getGroup() {
  return apiActionFactory('group', api.getGroup());
}

export function getUsers() {
  return apiActionFactory('users', api.getUsers());
}

export function getUser(username: string) {
  return apiActionFactory('user', api.getUser(username));
}

export function getDailyGroupSaldos(fromDate: Moment) {
  return apiActionFactory('groupSaldos', api.getDailyGroupSaldos(fromDate));
}

export function authenticateUser(username: string, password: string) {
  return apiActionFactory('authentication', api.authenticateUser(username, password), 'post');
}

export function makeTransaction(username: string, amount: number) {
  return apiActionFactory('transaction', api.makeTransaction(username, amount), 'post');
}
