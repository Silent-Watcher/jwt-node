const express = require('express');
const http = require('http');
const app = express();
const PORT = 3000;

const server = http.createServer({}, app);

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

server.listen(PORT, () =>
  console.log(`server is running on port : ${PORT},\n http://localhost:${PORT}`)
);
