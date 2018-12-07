const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
