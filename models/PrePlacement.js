const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PrePlacementSchema = new Schema({
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
module.exports = PrePlacement = mongoose.model("preplacement", PrePlacementSchema);