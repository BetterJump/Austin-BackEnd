//const pg = require('pg');

// const client = new pg.Client({
//   user: 'aust',
//   password: '00000000',
//   host: '127.0.0.1',
//   database: 'jump',
//   port: 5432,
// })

// async function one () {
//   client.connect()
//   client.query('SELECT * FROM comments WHERE id = 5000000')
//   .then((results) => {
//     return console.timeEnd();
//   })
//   .catch((err) => {
//     console.log(err);
//     return console.timeEnd();
//   });
// };

// let data = [];
let x = Date.now();

for(let i = 0; i < 30000000; i++) {
  // let x = await one();
  // data.push(x);
}

let y = Date.now();

console.log((y-x)/100);

//console.log(data.reduce((a, b) => a + b, 0) / data.length);
