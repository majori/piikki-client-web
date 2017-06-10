// @flow
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/app';

const defaultState = {
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

}, fromJS(defaultState));
