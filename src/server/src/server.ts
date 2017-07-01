import * as express from 'express';
import * as path from 'path';
import * as _ from 'lodash';
import * as sio from 'socket.io';
import nfc from './nfc';
import * as api from './services/api';
import { API_URL, API_TOKEN} from './config';

import * as http from 'http';
const proxy = require('express-http-proxy'); //tslint:disable-line

// Initialize Express and Socket.io
async function createServer(cfg: any) {
  const exprs = await createExpressServer(cfg);
  const native = http.createServer(exprs);
  const io = createSocket(native);

  return {
    express: exprs,
    http: native,
    socket: io,
  };
}

// Create Express server
async function createExpressServer(cfg: any) {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));

  server.use('/proxy', proxy(API_URL, {
    https: true,
    proxyReqOptDecorator: (reqOpts: any) => _.set(reqOpts, ['headers', 'Authorization'], API_TOKEN),
  }));

  return server;
}

// Create websocket
function createSocket(server: http.Server) {
  const io = sio(server);

  io.on('connection', (socket) => {
    nfc.reader.card.subscribe(async (card: string) => {
      const res = await api.getUserWithCard(card);
      // Send username via socket
      if (res.authenticated) {
        socket.emit('user', res.username);

      // Send card ID via socket
      } else {
        socket.emit('card', card);
      }
    });

    nfc.reader.error.subscribe((err: any) => {
      socket.emit('reader-error', err);
    });

    nfc.reader.device.subscribe((device: any) => {
      socket.emit('device', device);
    });

    nfc.error.subscribe((err: any) => {
      socket.emit('error', err);
    });
  });

  return io;
}

export default createServer;
