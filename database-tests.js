const pg = require('pg');
const db = require('./app/database');



async function runTests () {
  let data = [];
  for(let i = 0; i < 30; i++) {
    let x = Date.now();
    await db.getX(5000000, 100);
    let y = Date.now();
    data.push((y - x) / 1000);
  }
  console.log(data.reduce((a, b) => a + b, 0) / data.length);
}

runTests();

