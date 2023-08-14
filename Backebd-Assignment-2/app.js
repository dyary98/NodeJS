const express = require("express");
const port = 3000;

const app = express();

app.listen(port);

app.use("/users", (req, res, next) => {
  console.log("I am using the users middleware");
  res.send("<h1>Hey there! from the users middleware</h1>");
});

app.use("/", (req, res, next) => {
  console.log("I am using the all middleware");
  res.send("<h1>Hey there! from the all middleware</h1>");
});
