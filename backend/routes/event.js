const express=require("express");
const {createEvent, eventbycity, bookticket, conformticket, getdetailofevent, mydashboard, requestalldata, rejectpendingone} = require("../controller/event");
const { authenticated } = require("../middleware/auth");
const router=express.Router();

router.post("/createevent",authenticated,createEvent)
router.get("/searcheventbycity",eventbycity); // for now i removed authentication
router.get("/detail/:eventid",getdetailofevent)  //authentication required for testing
router.post("/mydashboard",authenticated,mydashboard)  
router.post("/bookticket/:id",authenticated,bookticket)
router.post("/conformticket/:eventid",authenticated,conformticket)
router.post("/requestdata",authenticated,requestalldata)
router.post("/rejectoutdated",authenticated,rejectpendingone)


module.exports=router