require("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const users = require("./routes/api/users");
const channel = require("./routes/api/channel");
const chat = require("./routes/api/chat")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const dbUrl = process.env.NODE_ENV==='development'? "mongodb://localhost:27017/chatdb" : process.env.dbUrl
const port = process.env.PORT;
mongoose
.connect(dbUrl, {useNewUrlParser: true})
.then(()=>{
    app.listen(port, ()=>{
        console.log(`server is listening on port ${port}, mongodb connected`);
    }) 
})
.catch((err) => {
    console.log(err)
});

app.use("/api/users", users);
app.use('/api/chats', chat);
app.use("/api/channels", channel);



