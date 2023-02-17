require("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose");
const cors  = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        method: ["GET", "POST"]
    }
})



const users = require("./routes/api/users");
const channel = require("./routes/api/channel");
const chat = require("./routes/api/chat");
const userRoutes = require("./routes/userRoutes");




const dbUrl ="mongodb://localhost:27017/chatdb";
const port = process.env.PORT;
mongoose
.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongodb connected")
})
.catch((err) => {
    console.log(err)
});


server.listen(port, console.log(`Listening on port ${port}`)) 

// app.use("/api/users", users);
app.use('/api/chats', chat);
app.use("/api/channels", channel);
app.use("/api/auth", userRoutes)



