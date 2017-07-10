// @flow
import * as sio from 'socket.io-client';
import { Store } from 'redux';

import { loginUser, setCard, socketActive } from '../actions/app';

const socket = sio(process.env.backendUrl);

export function initializeSocket(store: Store<any>) {
  socket.on('connect', () => {
    store.dispatch(socketActive(true));
  });

  socket.on('connect_error', () => {
    console.log('Disconnecting socket');
    store.dispatch(socketActive(false));
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
