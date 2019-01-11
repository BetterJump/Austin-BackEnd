const pg = require('pg');
const client = new pg.Client({
  user: 'aust',
  password: '00000000',
  host: '127.0.0.1',
  database: 'jumpstart',
  port: 5432,
})

client.connect()
.then(() => {
  client.query('SELECT * FROM comments')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
})
.catch(err => console.log(err))

// connect to db and seed x10,000,000
