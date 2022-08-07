const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const users = require("./routes/api/users");
const channel = require("./routes/api/channel");
const chat = require("./routes/api/chat")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const dbUrl = process.env.NODE_ENV==='development'? "mongodb://localhost:27017/messageDb" : process.env.dbUrl

mongoose
.connect(dbUrl, {useNewUrlParser: true})
.then(()=>{
    app.listen(process.env.PORT||8080, ()=>{
        console.log(`server is listening on port ${process.env.PORT}, mongodb connected`);
    }) 
})
.catch((err) => {
    console.log(err)
});

app.use("/api/users", users);
app.use('/api/chats', chat);
app.use("/api/channels", channel);



