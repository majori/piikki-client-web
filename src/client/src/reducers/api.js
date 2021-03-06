// @flow
import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import actions from '../actions/api';

const defaultState: ApiState = {
  users: {
    loading: false,
    results: [],
    selectors: {
      order: 'asc'
    }
  },

  user: {
    loading: false,
    results: {
      username: null,
      saldo: null,
    },
  },

  transaction: {
    loading: false,
    results: {},
  },

  transactions: {
    loading: false,
    results: [],
  },

  group: {
    loading: false,
    results: {},
  },

  groupSaldos: {
    loading: false,
    results: [],
  },

  authentication: {
    loading: false,
    results: {
      username: '',
      authenticated: null,
    },
  },

  alterativeLogin: {
    loading: false,
    results: {},
  },
};

export default handleActions({
  [actions.request]: (state, action) => state.setIn([action.payload, 'loading'], true),
  [actions.receive]: (state, action) => state.setIn([action.payload, 'loading'], false),
  [actions.users.get]: (state, action) => state.setIn(['users', 'results'], List(action.payload)),
  [actions.user.get]: (state, action) => state.setIn(['user', 'results'], Map(action.payload)),
  [actions.transaction.post]: (state, action) => state.setIn(['transaction', 'results'], Map(action.payload)),
  [actions.transactions.get]: (state, action) => state.setIn(['transactions', 'results'], List(action.payload)),
  [actions.groupSaldos.get]: (state, action) => state.setIn(['groupSaldos', 'results'], List(action.payload)),
  [actions.authentication.post]: (state, action) => state.setIn(['authentication', 'results'], Map(action.payload)),
  [actions.group.get]: (state, action) => state.setIn(['group', 'results'], Map(action.payload)),
  [actions.alternativeLogin.post]: (state, action) => state.setIn(['alternativeLogin', 'results'], Map(action.payload))
}, fromJS(defaultState));
