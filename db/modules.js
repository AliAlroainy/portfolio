const mongoose = require('../database');
const Schema = mongoose.Schema;


const experSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  com: {
    type: String,
  },
  date: {
    type: Date,
  },
  active: {
    type: Boolean ,
  },
});

const servSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },

  description: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});

const PersonalSchema = new Schema({

 
  img: {
    type: String,
  },

  pname: {
    type: String,
  },
  sentence: {
    type: String,
  },
  description: {
    type: String,
  },
  job: {
    type: String,
  },
});

const contaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },

  message: {
    type: String,
  },

  date: {
    type: Date,
  },
  active: {
    type: Boolean,
  },

});

const workSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  img: {
    type: String,
  },

  description: {
    type: String,
  },

  demo: {
    type: String,
  },
  active: {
    type: Boolean,
  },

});

const skillsSchema = new Schema({
  sname: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});

module.exports = {
  serv:  mongoose.model("serv", servSchema),
  exper: mongoose.model("exper", experSchema),
  skills: mongoose.model("skills", skillsSchema),
  contact: mongoose.model("conta", contaSchema),
  personal: mongoose.model("Personal", PersonalSchema),
  works: mongoose.model("work", workSchema)

}