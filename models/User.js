const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  prn: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  placement:{
    type: Boolean,
    default: false
  },
  preplacement:{
    type: Boolean,
    default: false
  },
  higherstudies:{
    type: Boolean,
    default: false
  }
});
module.exports = User = mongoose.model("users", UserSchema);