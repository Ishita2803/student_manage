const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const HigherStudiesSchema = new Schema({
  sname: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration:{
      type: String,
      required:true
  },
  link:{
      type:String,
      required:true
  }
});
module.exports = HigherStudies = mongoose.model("higherStudies", HigherStudiesSchema);