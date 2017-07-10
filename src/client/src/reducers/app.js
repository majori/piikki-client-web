// @flow
import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/app';

const defaultState: AppState = {
  user: {
    username: null,
    saldo: null,
  },

  group: {
    name: null,
  },

  login: {
    username: 'user3',
    error: false,
  },

  card: {
    id: null,
    readAt: null,
  },

  socket: {
    active: false
  }
};

export default handleActions({
  [actions.loginUser]: (state, action) => state.mergeIn(['login'], {
    username: action.payload,
    error: false
  }),
  [actions.loginError]: (state) => state.setIn(['login', 'error'], true),
  [actions.logoutUser]: (state: Map<string, any>) => state.withMutations((ctx: Map<string, any>) => {
    ctx.mergeIn(['login'], { username: null, error: null });
    ctx.mergeIn(['user'], defaultState.user);
  }),
  [actions.setGroup]: (state, action) => state.set('group', Map(action.payload)),
  [actions.setUser]: (state, action) => state.set('user', Map(action.payload)),
  [actions.updateSaldo]: (state, action) => state.setIn(['user', 'saldo'], action.payload),

  [actions.setCard]: (state, action) => state.mergeIn(['card'], { id: action.payload, readAt: Date.now() }),
  [actions.clearCard]: (state) => state.mergeIn(['card'], { id: null, readAt: null }),

  [actions.socketActive]: (state, action) => state.setIn(['socket', 'active'], action.payload),

}, fromJS(defaultState));
