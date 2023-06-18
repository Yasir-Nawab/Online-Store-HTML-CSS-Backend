const mongoose = require("mongoose");

const propSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    password:String
});
module.exports = mongoose.model("propModel",propSchema);