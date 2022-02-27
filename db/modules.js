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
  loc: {
    type: String,
  },
  date: {
    type: Date,
  },
  active: {
    type: Boolean ,
  },
});

const photoSchema = new Schema({
  photo: {
    type: String,
  },
  cv: {
    type: String,
  }
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
  link: {
    type: String,
  
  },

  linkname : {
    type: String,
  }

});

const workSchema = new Schema({
  pname: {
    type: String,
  },

  pimg: {
      type: String,
    },

  description: {
    type: String,
  },

  url: {
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
  photos : mongoose.model("photo",  photoSchema),
  works: mongoose.model("work", workSchema)

}