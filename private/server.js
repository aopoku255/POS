const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const keys = require("../keys.json");

app.set("keys", keys.tekdevisalPOS);
const routes = require("../routes/v1/routes");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const User = require("./schemas/User");
const onlineURI =
  "mongodb+srv://tekdevisal:Frimpong2010@cluster0.0dlsllz.mongodb.net/?retryWrites=true&w=majority/tekdevisalPOS";
const localURI = "mongodb://localhost/tekdevisalPOS";
// const mongoose = require("./database/mongodb")(app.get("keys").db_name);

// require("./database/mongodb")(app.get("keys").db_name);
// mongoose.connect(
//   `${localURI}/tekdevisalPOS`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("Local Mongodb connected")
// );

mongoose.connect(
  `${localURI}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Local mongodb connected")
);

async function fetchUser() {
  const results = await User.find();
  console.log("Local", results);
}

fetchUser();
setInterval(async () => {
  mongoose.connect(
    onlineURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("ONLINE mongodb connected")
  );
  const result = await User.find();
  console.log("ONLINE", result[0]);
}, 5000);

// Using CORS
app.use(cors());

//send post requests
app.use(express.json());

//Route middleware
app.use("", routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3001, () =>
    console.log("Server running on port 3001")
  );
}

module.exports = app;
