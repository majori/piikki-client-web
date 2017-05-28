import * as express from 'express';
import * as path from 'path';

async function createServer(cfg: any) {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));

  return server;
}

export default createServer;
