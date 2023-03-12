const mongoose=require("mongoose");


const schema=new mongoose.Schema({
  limit:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:false
  }
  ,
  venue:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  startat:{
    type:String,  //Date was leading to an error
    required:true
  },
  endat:{
    type:String,  //Date was leading to an error
    required:true
  },
   date:{
    type:String, // storing the data in string for better operation and converting it back to DATE when ever required
    required:true
   }
  ,
  partcipants:[
    {
      type:String,
      require:true
    }
  ],
  organisedby:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"user"
  }
})


const Event=mongoose.model("event",schema);



module.exports={Event}