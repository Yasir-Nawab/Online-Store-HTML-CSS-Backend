const mongoose = require ("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/propertysale")

require("./propertyModel");
require("./findModel");
