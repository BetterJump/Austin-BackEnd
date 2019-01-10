const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  console.log('request on /comments');
})

app.listen(3002, () => {
  console.log('Roger Roger / 3002');
})