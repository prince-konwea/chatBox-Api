const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const channel = require("./routes/api/channel");
const app = express();
// created DB
mongoose
.connect("mongodb://localhost:27017", {useNewUrlParser: true})
.then(()=>{
    app.listen(4000, ()=>{
        console.log("server is listening on port 4000, mongodb connected")
    }) 
})
.catch((err) => {
    console.log(err)
})



app.use(bodyParser.json());

