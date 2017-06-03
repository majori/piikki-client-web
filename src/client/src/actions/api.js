// @flow
import { createActions, createAction } from 'redux-actions';
import * as api from '../services/api';

const REQUEST = createAction('REQUEST');
const RECEIVE = createAction('RECEIVE');
const GET = createAction('GET');

const actions = createActions({
  REQUEST,
  RECEIVE,

  USERS: {
    GET,
  },

  USER: {
    GET,
  },
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
