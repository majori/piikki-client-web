// @flow
import { createAction } from 'redux-actions';
import * as _ from 'lodash';

import * as apiActions from './api';

export const loginUser = createAction('LOGIN_USER');
export const loginError = createAction('LOGIN_ERROR');
export const logoutUser = createAction('LOGOUT_USER');

export const setGroup = createAction('SET_GROUP');
export const setUser = createAction('SET_USER');
export const updateSaldo = createAction('UPDATE_SALDO');

export const setCard = createAction('SET_CARD');
export const clearCard = createAction('CLEAR_CARD');

export const socketActive = createAction('SOCKET_ACTIVE');

export function getGroup() {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.getGroup());
    dispatch(setGroup(res));
  };
}

export function getUser(username: string) {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.getUser(username));
    dispatch(setUser(res));
  };
}

export function authenticateUser(username: string, password: string) {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.authenticateUser(username, password));
    if (res.authenticated) {
      dispatch(loginUser(res.username));
    } else {
      dispatch(loginError());
    }
  };
}

export function makeTransaction(username: string, amount: number) {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.makeTransaction(username, amount));
    dispatch(updateSaldo(res.saldo));
  };
}
