const mongoose = require("mongoose");
const User = require("../schemas/User");
require("dotenv").config()
mongoose.set("strictQuery", false);
const onlineURI =
  "mongodb+srv://tekdevisal:Frimpong2010@cluster0.0dlsllz.mongodb.net/?retryWrites=true&w=majority";

module.exports = (db_name) => {
  return mongoose.connect(
    `${onlineURI}/${db_name}`,
    () => {
      console.log("Local MongoDB Connection Successful");
    },
    (e) => console.error(e)
  );
};

