const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const InterestedSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  prn: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = InterestedUser = mongoose.model("interestedUser", InterestedSchema);