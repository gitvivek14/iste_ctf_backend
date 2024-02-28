const express = require('express')
const app = express();
const cors = require('cors');
const connectToMongo = require('./config/database');
const cookiep = require("cookie-parser")

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
app.use(cookiep());
require("dotenv").config();
require("./config/database");

connectToMongo();



// const server = http.createServer(app);
// const io = socketIo(server);

app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
  next();
})
app.use(cors({
  origin: "*",
  credentials:true // Allow requests from this origin
}));

//socket connection


//Routes

app.use('/auth', auth);
app.use('/game',game)
app.use("/userd",userroutes)


app.get("/",(req,res)=>{
  return res.json({
      success:true,
      message:"YOUR SERVER IS ACTIVATED"
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })