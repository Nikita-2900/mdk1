const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/67', (req, res) => {
  res.send('i am from Wraschentsi!');
});

app.get('/76', (req, res) => {
  res.send('Hello World!');
});
app.get('/pipidaster', (req, res) => {
  res.send('Hello World!');
});
app.get('/promoaction', (req, res) => {
  res.send('Hello World!');
});
app.get('/oxandralon', (req, res) => {
  res.send('!');
});
app.get('/aseria', (req, res) => {
  res.send('curururururuuru!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});