import * as express from 'express';
import * as path from 'path';
import nfc from './nfc';

async function createServer(cfg: any) {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));

  nfc.reader.card.subscribe((card: any) => console.log(card));

  return server;
}

export default createServer;
