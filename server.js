const express = require('express');
const http = require('http');
const errorHandler = require('./middlewares/global/errorHandlerMiddleware');
const notFoundErrorHandler = require('./middlewares/global/notFoundErrorHandler.middleware');
const app = express();
const PORT = 3000;

const server = http.createServer({}, app);

app.use(express.json(), express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

app.use(notFoundErrorHandler);
app.use(errorHandler);

server.listen(PORT, () =>
  console.log(`server is running on port : ${PORT},\n http://localhost:${PORT}`)
);
