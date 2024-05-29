const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", usersRouter);
//Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//invalid route
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not found",
  });
});

//server error
app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something Broke!",
  });
});

module.exports = app;
