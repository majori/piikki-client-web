// @flow
import * as socketIO from 'socket.io-client';

const apiUrl: string = window.env.apiUrl;

const socket = socketIO(apiUrl);

export default socket;
