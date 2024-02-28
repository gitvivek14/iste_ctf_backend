const express = require('express')
const cors = require('cors');
const connectToMongo = require('./config/database');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const userroutes = require("./routes/user")
const game = require('./routes/game');
const auth = require('./routes/auth');
// const {Server} = socket
// const server = require("http").createServer(app)
// fetching port from env file | if not present default - 4000
const port = process.env.port||4000;
// const io = new Server(server,{
//   cors:{
//     origin:"*",
//     credentials:true,
//     methods:["GET","POST"]
//   }
// })
app.use(express.json());
require("dotenv").config();
require("./config/database");

connectToMongo();
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"YOUR SERVER IS ACTIVATED"
    })
  })

// const server = http.createServer(app);
// const io = socketIo(server);

app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
  next();
})
app.use(cors({
  origin: "https://iste-ctf-2wmi.vercel.app",
  credentials:true // Allow requests from this origin
}));

//socket connection


//Routes

app.use('/auth', auth);
app.use('/game',game)
app.use("/userd",userroutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })