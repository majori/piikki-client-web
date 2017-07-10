// @flow
import { createAction } from 'redux-actions';
import * as _ from 'lodash';

export const showModal = createAction(
  'SHOW_MODAL',
  (type, modalProps, options) => ({ type, modalProps, options: options || {} })
);
export const hideModal = createAction('HIDE_MODAL');
