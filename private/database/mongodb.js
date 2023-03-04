const mongoose = require("mongoose");
require("dotenv").config()
mongoose.set("strictQuery", false);
const localURI = "mongodb://localhost";

module.exports = (db_name) => {
  return mongoose.connect(
    `${localURI}/${db_name}`,
    () => {
      console.log("Local MongoDB Connection Successful");
    },
    (e) => console.error(e)
  );
};

