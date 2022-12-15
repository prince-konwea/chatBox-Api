require("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors  = require("cors");
const userRoutes = require("./routes/userRoutes");



const users = require("./routes/api/users");
const channel = require("./routes/api/channel");
const chat = require("./routes/api/chat")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const dbUrl = process.env.NODE_ENV==='development'? "mongodb://localhost:27017/chatdb" : process.env.dbUrl
const port = process.env.PORT;
mongoose
.connect(dbUrl, {useNewUrlParser: true})
.then(()=>{
    console.log("mongodb connected")
})
.catch((err) => {
    console.log(err)
});


const server = app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
}) 

// app.use("/api/users", users);
app.use('/api/chats', chat);
app.use("/api/channels", channel);
app.use("/api/auth", userRoutes)



