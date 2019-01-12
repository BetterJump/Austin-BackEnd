const fs = require('fs');
const Faker = require('faker');

let string = 'id, username, words, created, project_id\n';

for(let i = 0; i < 1000; i++) {
  string = string + `0, ${Faker.name.firstName()}, ${Faker.lorem.sentence()}, ${Faker.date.weekday()}, ${Faker.random.number()}\n`
}

//console.log(string);

fs.writeFile('data.csv', string, (err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('-> complete');
  }
}); 
