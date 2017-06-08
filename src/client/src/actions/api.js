// @flow
import { Moment } from 'moment';
import { createActions } from 'redux-actions';
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

  TRANSACTION: {
    POST: (username: string, amount: number) => ({ username, amount })
  },

  GROUP_SALDOS: {
    GET: (saldos) => saldos,
  }
});

export default actions;

export function getUsers() {
  return async (dispatch: Function) => {
    dispatch(actions.request('users'));
    dispatch(actions.users.get(await api.getUsers()));
    dispatch(actions.receive('users'));
  };
}

export function getUser(username: string) {
  return async (dispatch: Function) => {
    dispatch(actions.request('user'));
    dispatch(actions.user.get(await api.getUser(username)));
    dispatch(actions.receive('user'));
  };
}

export function getDailyGroupSaldos(fromDate: Moment) {
  return async (dispatch: Function) => {
    dispatch(actions.request('groupSaldos'));
    dispatch(actions.groupSaldos.get(await api.getDailyGroupSaldos(fromDate)));
    dispatch(actions.receive('groupSaldos'));
  };
}
