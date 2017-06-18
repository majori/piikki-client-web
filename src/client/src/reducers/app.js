// @flow
import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/app';

const defaultState = {
  user: {
    username: null,
    saldo: null,
  },

  group: {
    name: null,
  },

  login: {
    username: null,
    error: false,
  }
};

export default handleActions({
  [actions.loginUser]: (state, action) => state.mergeIn(['login'], {
    username: action.payload,
    error: false
  }),
  [actions.loginError]: state => state.setIn(['login', 'error'], true),
  [actions.setGroup]: (state, action) => state.set('group', Map(action.payload)),
  [actions.setUser]: (state, action) => state.set('user', Map(action.payload)),
  [actions.updateSaldo]: (state, action) => state.setIn(['user', 'saldo'], action.payload),

}, fromJS(defaultState));
