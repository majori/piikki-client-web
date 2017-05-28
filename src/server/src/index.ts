import createServer from './server';

async function startServer() {
  const server = await createServer({});
  const cfg = {
    host: 'localhost',
    port: 80,
  };

  server.listen(cfg.port, cfg.host, () => {
    console.log(`Server listening on http://${cfg.host}:${cfg.port}`);
  });
}

startServer();
