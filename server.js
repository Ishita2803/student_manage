require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const preplacement = require("./routes/api/preplacement");
const placement = require("./routes/api/placement");
const higherStudies = require("./routes/api/higherStudies")
const interested = require("./routes/api/interested")
const app = express();
const cors = require("cors");


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors())
app.use('/public', express.static('public'));
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/placement", placement);
app.use("/api/higherStudies", higherStudies);
app.use("/api/interested", interested);
app.use("/api/preplacement", preplacement);
app.use("/api/current", preplacement);


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
  const path = require('path');
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));