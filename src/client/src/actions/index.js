import { combineActions } from 'redux-actions';
import api from './api';

export default combineActions(
  ...api,
);
