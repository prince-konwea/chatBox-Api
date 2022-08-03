const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const channel = require("./routes/api/channel");
const app = express();



app.use(bodyParser.json());

app.listen(5000)