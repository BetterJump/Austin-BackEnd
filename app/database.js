const pg = require('pg');
const client = new pg.Client({
  user: 'aust',
  password: '00000000',
  host: '127.0.0.1',
  database: 'jump',
  port: 5432,
})

// creates a random id and retrieves it from the database
function getOneRandom (callback) {
  client.connect()
  .then(_=> {
    let id = Math.floor(Math.random() * 10000000);
    client.query(`SELECT * FROM comments WHERE id = ${id}`)
    .then(data => {
      callback(data);
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

// given a start id, get30 will return x number of rows;
function getX (start, x) {
  client.connect()
  .then(_=> {
    client.query(`SELECT * FROM comments WHERE id = ${start} LIMIT ${x}`)
    .then(data => {
      callback(data);
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

function getId (id) {
  client.connect()
  .then(_=> {
    client.query(`SELECT * FROM comments WHERE id = ${id}`)
    .then(data => {
      callback(data);
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

module.exports = {
  getOneRandom, getX, getId
}

