// @flow
import { createAction } from 'redux-actions';

import * as apiActions from './api';

export const logInUser = createAction('LOGIN_USER');

export const authenticateUser = (username: string, password: string) => {
  return async (dispatch: Function) => {
    const res = await dispatch(apiActions.authenticateUser(username, password));
    if (res.authenticated) {
      dispatch(logInUser(res.username));
    }
  };
};

