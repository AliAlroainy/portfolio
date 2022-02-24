const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema;

const personalInfo = new Schema({
  name: String,
  mainword: String,
  description: Date
});

exports.database = database;