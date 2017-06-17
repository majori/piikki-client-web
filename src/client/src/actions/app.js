// @flow
import { createAction } from 'redux-actions';
import * as _ from 'lodash';

import * as apiActions from './api';

export const loginUser = createAction('LOGIN_USER');
export const loginError = createAction('LOGIN_ERROR');

export const setUser = createAction('SET_USER');
export const updateSaldo = createAction('UPDATE_SALDO');

export const getUser = (username: string) => {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.getUser(username));
    dispatch(setUser(res));
  };
};

export const authenticateUser = (username: string, password: string) => {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.authenticateUser(username, password));
    if (res.authenticated) {
      dispatch(loginUser(res.username));
    } else {
      dispatch(loginError());
    }
  };
};

export const makeTransaction = (username: string, amount: number) => {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.makeTransaction(username, amount));
    dispatch(updateSaldo(res.saldo));
  };
};

