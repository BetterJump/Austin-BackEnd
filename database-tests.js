const pg = require('pg');

const client = new pg.Client({
  user: 'ubuntu',
  host: '127.0.0.1',
  database: 'jump',
  port: 5432,
})

const one = function () {
  console.time();
  client.query('SELECT * FROM comments WHERE id = 5000000')
  .then((results) => {
    console.timeEnd();
    console.log(results);
  })
  .catch((err) => {
    console.timeEnd();
    console.log(err);
  });
};

one();