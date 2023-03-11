const express=require('express');
const {connection} = require('./config/db');
const cors=require("cors");
const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))
const port =process.env.port || 5050

const user=require('./routes/user');
const event=require('./routes/event')

app.use("/user",user)
app.use("/event",event)

app.listen(port,()=>{
  connection
  try{
    console.log(`connected to the port ${port}`)
  }
  catch(err){
    console.log("err",err.message)
  }
})

