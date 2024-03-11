import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT: number = Number(process.env.MIRANTES_PORT) || 3003;

server.listen(PORT, () => {
  console.log(` === SERVER IS RUNNING ON PORT [${PORT}] === `);
});
