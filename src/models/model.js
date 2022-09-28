const mongoose = require("mongoose");
const validator = require("validator");

const Structure = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },

  Phone: {
    type: Number,
    required: true,
    min: 10,
  },

  Message: {
    type: String,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

const contacts = new mongoose.model("contact", Structure);

module.exports = contacts;
