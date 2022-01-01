const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const HigherStudiesSchema = new Schema({
  marks12: {
    type: NumberDecimal,
    required: true
  },
  cgpa: {
    type: NumberDecimal,
    required: true
  },
  activeKt: {
    type: Number,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  location:{
      type:String,
      required:true
  },
  lor:{
      type:String,
      required:true
  },
  field:{
      type:String,
      required:true
  }
});
module.exports = HigherStudies = mongoose.model("higherStudies", PlacementSchema);