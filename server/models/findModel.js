const mongoose = require("mongoose");

const findSchema = new mongoose.Schema({
    name:String,
    img:String
});

module.exports = new mongoose.model("findModel",findSchema);