const mongoose = require("mongoose");
const User = require("../schemas/User");
mongoose.set("strictQuery", false);
const localURI = "mongodb://localhost";
const onlineURI =
  "mongodb+srv://tekdevisal:Frimpong2010@cluster0.0dlsllz.mongodb.net/?retryWrites=true&w=majority";

module.exports = (db_name) => {
  return mongoose.connect(
    `${localURI}/${db_name}`,
    () => {
      console.log("Local MongoDB Connection Successful");
    },
    (e) => console.error(e)
  );
};

