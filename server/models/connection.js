const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/propertysale")

require("./propertyModel");
require("./findModel");