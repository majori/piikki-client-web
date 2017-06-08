import { combineActions } from 'redux-actions';
import api from './api';
import app from './app';

export default combineActions(
  ...api,
  ...app,
);
