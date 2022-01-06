const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PlacementSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  companydescription: {
    type: String,
    required: true
  },
  location:{
    type:String,
    required:true
  },
  startdate:{
    type: Date,
    required: true
  },
  enddate:{
    type: Date,
    required: true
  },
  jobdescription: {
    type: String,
    required: true
  },
  cgpa: {
    type:  Number,
    required: true
  },
  branch:{
      type:String,
      required:true
  },
  link:{
    type:String,
    required:true
  }
});
module.exports = Placement = mongoose.model("placement", PlacementSchema);