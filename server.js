const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
