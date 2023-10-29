// getting-started.js
const mongoose = require('mongoose');
const config = require("config")
const db=config.get('db')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}