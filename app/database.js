const pg = require('pg');
const fs = require('fs');
const faker = require('faker');
const client = new pg.Client({
  user: 'admin',
  password: '12345678',
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

function table () {
  client.connect().then(_=> {
    client.query(`CREATE TABLE comments (
      id SERIAL PRIMARY KEY,
      username VARCHAR(36) NOT NULL,
      words VARCHAR(255) NOT NULL,
      created VARCHAR(24) NOT NULL,
      project_id VARCHAR(24) NOT NULL
    )`)
  }).catch(err => console.log(err));
}

function seed () {
  console.log('running...');
  let x = Date.now();
  let y;
  fs.appendFile('./data.csv', 'username, words, created, project_id\n', (err) => {
    if(err) console.log(err);
    else {
      for(let i = 0; i < 20; i++) {
        console.log(`loop number: ${i}`);
        let string = '';
        for(let j = 0; j < 500000; j++) {
          string = string + `${faker.name.firstName()}, ${faker.random.words(Math.floor(Math.random() * 20))}, ${faker.date.weekday()}, ${faker.random.number()}\n`;
        }
        fs.appendFileSync('./data.csv', string);
      } 
      y = Date.now();
      console.log('done :)');
    }
  })
  let time = (y - x) / 1000;
  return time;
}

module.exports = {
  getOneRandom, getX, getId, seed, table
}

