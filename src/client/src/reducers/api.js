// @flow
import * as _ from 'lodash';
import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import actions from '../actions/api';

export const defaultState = fromJS({
  users: {
    loading: false,
    results: [],
  },

  user: {
    loading: false,
    results: {},
  },
});

export default handleActions({
  [actions.request]: (state, action) => state.setIn([action.payload, 'loading'], true),
  [actions.receive]: (state, action) => state.setIn([action.payload, 'loading'], false),
  [actions.users.get]: (state, action) => state.setIn(['users', 'results'], List(action.payload)),
  [actions.user.get]: (state, action) => state.setIn(['user', 'results'], Map(action.payload)),
}, defaultState);
