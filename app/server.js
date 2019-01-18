const express = require('express');
const app = express();
const db = require('./database');

app.get('/comments/:id', (req, res) => {
  console.log('\nget request on /comments');
  console.log(`id -> ${req.params.id}`);
  db.getId(req.params.id)
  .then(data => {
    console.log(`db response -> ${data.rows}`);
    res.send(data.rows).status(200);
  })
  .catch(err => console.log(err));
})

app.post('/seed', (req, res) => {
  console.log('\nseeding db with 10,000,000 entries');
  console.log('time ->',db.seed());
  res.send('good and seeded :)').status(200);
})

app.post('/table', (req, res) => {
  db.table();
  res.send('table made boss :)').status(200);
})

app.listen(3002, _=> console.log('Roger Roger / 3002'));