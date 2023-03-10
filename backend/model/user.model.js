const mongoose=require("mongoose");

const schema=new mongoose.Schema({
  email:{
    type:String,
    required:[true,'please enter a email']
  },
  username:{
    type:String,
    required:[true,'please enter a username']
  },
  password:{
    type:String,
    required:[true,'please enter a password']
  },
  eventOrganising:[
    {
        type:String,
        required:true
    }
  ],
  eventJoining:[
     {
        type:String,
        required:true
    }
  ]
})


const User=mongoose.model("user",schema);



module.exports={User}