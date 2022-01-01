const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PlacementSchema = new Schema({
  marks12: {
    type: NumberDecimal,
    required: true
  },
  cgpa: {
    type: NumberDecimal,
    required: true
  },
  activeKt: {
    type:  Number,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location:{
      type:String,
      required:true
  },
  branch:{
      type:String,
      required:true
  }
});
module.exports = Placement = mongoose.model("placement", PlacementSchema);