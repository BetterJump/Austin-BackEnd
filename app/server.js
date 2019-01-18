const express = require('express');
const app = express();

const db = require('./database');


app.get('/comments/:id', (req, res) => {
  db.getId(req.params.id)
  .then(data => {
    res.send(data.rows).status(200);
  })
  .catch(err => console.log(err));
})

app.listen(3002, _=> console.log('Roger Roger / 3002'));