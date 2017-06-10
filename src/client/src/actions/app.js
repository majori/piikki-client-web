// @flow
import { createAction } from 'redux-actions';

import * as apiActions from './api';

export const loginUser = createAction('LOGIN_USER');
export const loginError = createAction('LOGIN_ERROR');

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

