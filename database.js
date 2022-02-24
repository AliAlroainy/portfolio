const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database');


mongoose.connection.on("error", console.error.bind(console, "connection error: "));
mongoose.connection.once("open", function () {
  console.log("Connected successfully");
});

module.exports = mongoose;