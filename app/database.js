const pg = require('pg');
const client = new pg.Client({
  user: 'aust',
  password: '00000000',
  host: '127.0.0.1',
  database: 'jump',
  port: 5432,
})

// creates a random id and retrieves it from the database
function getOneRandom () {
  return client.connect().then(_=> {
    let id = Math.floor(Math.random() * 10000000);
    return client.query(`SELECT * FROM comments WHERE id = ${id}`)
  }).catch(err => console.log(err));
}

function getX (start, x) {
  return client.connect().then(_=> {
    return client.query(`SELECT * FROM comments WHERE id = ${start} LIMIT ${x}`)
  }).catch(err => console.log(err));
}

function getId (id) {
  return client.connect().then(_=> {
    return client.query(`SELECT * FROM comments WHERE id = ${id}`)
  }).catch(err => console.log(err));
}

module.exports = {
  getOneRandom, getX, getId
}

