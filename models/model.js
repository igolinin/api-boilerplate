const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: String,
    default: "not confirmed",
    required: true
  },
  mail_conf: {
    type: String
  }
});

const Model = mongoose.model("Model", userSchema);

module.exports = Model;
