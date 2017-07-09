// @flow
import * as sio from 'socket.io-client';
import { Store } from 'redux';

import { loginUser, setCard } from '../actions/app';

const socket = sio(process.env.backendUrl);

export function initializeSocket(store: Store<any>) {
  socket.on('connect_error', (timeout) => {
    console.log('Disconnecting socket')
    socket.close();
  });

  socket.on('user', (username: string) => {
    store.dispatch(loginUser(username));
  });

  socket.on('card', (cardId: string) => {
    store.dispatch(setCard(cardId));
  });

  socket.on('reader-error', (data) => {
    console.log(data);
  });
}

export default socket;
