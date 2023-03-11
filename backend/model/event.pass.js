const mongoose=require("mongoose");


const schema=new mongoose.Schema({
   eventid:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"event"
   },
   userid:{
    type:String,
    require:true
   },
   status:{
    type:String,
    enum:["accepted","rejected","pending"],
    require:true
   }
})

const EventPass=mongoose.model("eventpass",schema);



module.exports={EventPass}