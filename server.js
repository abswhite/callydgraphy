'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));


app.use(express.static('./public'));
app.get('*', function(request, response) {
  console.log('index.html');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
