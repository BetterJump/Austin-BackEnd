const pg = require('pg');
const Knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    database : 'jumpstart'
  }
})

Knex.select().from('comments')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})


// connect to db and seed x10,000,000
