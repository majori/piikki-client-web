// @flow
import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { logInUser } from '../actions/app';

const defaultState = {
  login: {
    username: null,
  }
};

export default handleActions({
  [logInUser]: (state, action) => state.setIn(['login', 'username'], action.payload),
}, fromJS(defaultState));
