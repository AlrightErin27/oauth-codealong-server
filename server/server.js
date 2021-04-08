//Require Modules//
require("dotenv").config();
const express = require("express");
const rowdy = require("rowdy-logger");
const morgan = require("morgan");
const passport = require("passport");

//Variables//
const app = express();
const PORT = process.env.PORT || 8000;
const rowdyResults = rowdy.begin(app);

//Middleware//
app.use(morgan("tiny"));
//grabs data & puts it in req.body
app.use(express.urlencoded({ extended: false }));
//grabs json data & puts it in the req.body
app.use(express.json());
app.use(passport.initialize());

//Controllers//
app.use("/auth", require("./controllers/authController"));

//Routes//
app.get("/", (req, res) => {
  res.json({ msg: "Hi World!" });
});

//Listen//
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`Ship@Port 🚢 :${PORT}`);
});
