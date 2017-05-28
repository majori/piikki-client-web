import createServer from './server';

async function startServer() {
  const server = await createServer({});

  server.listen(80, 'localhost', () => {
    console.log('Server listening on http://localhost:80');
  });
}

startServer();
