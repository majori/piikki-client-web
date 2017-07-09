// @flow
import { fromJS, Map } from 'immutable';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/modal';

const defaultState: ModalDefaultState = {
  type: null,
  modalProps: {},
};

export default handleActions({
  [actions.showModal]: (state, action) => state.merge(Map(action)),
  [actions.hideModal]: state => state.merge(Map({ type: null, modalProps: {} })),
}, fromJS(defaultState));
