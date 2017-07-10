// @flow
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/modal';

const defaultState: ModalState = {
  type: null,
  options: {},
  modalProps: {},
};

export default handleActions({
  [actions.showModal]: (state, action) => state.merge(fromJS(action.payload)),
  [actions.hideModal]: state => state.merge(fromJS(defaultState)),
}, fromJS(defaultState));
