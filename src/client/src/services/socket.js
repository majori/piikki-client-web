// @flow
import * as sio from 'socket.io-client';

const apiUrl: string = 'http://localhost:5000';

const socket = sio(apiUrl);

export default socket;
