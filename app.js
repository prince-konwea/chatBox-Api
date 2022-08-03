const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const channel = require("./routes/api/channel");

const app = express();

app.use(bodyParser.json());
// created DB
mongoose
.connect("mongodb://localhost:27017", {useNewUrlParser: true})
.then(()=>{
    app.listen(8080, ()=>{
        console.log("server is listening on port 8080, mongodb connected")
    }) 
})
.catch((err) => {
    console.log(err)
});

app.use("/api/users", users);
app.use("/api/messages", messages);
app.use("/api/channel", channel);



