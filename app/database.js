const pg = require('pg');
const Knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'aust',
    pasword: '00000000',
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
