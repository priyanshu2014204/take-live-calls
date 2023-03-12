const { Event } = require("../model/event.model");
const { User } = require("../model/user.model");
const moment = require("moment-timezone");
const { EventPass } = require("../model/event.pass");

function timeconvertor() {
  const now = moment();
  const istTimeZone = "Asia/Kolkata";
  const istDateTimeString = now
    .tz(istTimeZone)
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
  const utcDateTimeString = now
    .tz(istTimeZone)
    .utc()
    .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  return istDateTimeString;
}

exports.createEvent = async (req, res) => {
  try {
    const { limit, title, description, venue, state, date, startat, endat } =
      req.body;
    const user = req.user;
    //format year-month-date time:00
    // '2022-08-21 11:30:00'
    const myMomentStart = moment.tz(`${date} ${startat}:00`, "Asia/Kolkata");
    const startTime = myMomentStart.format();
    const currentTime = timeconvertor();

    if (startTime <= currentTime) {
      return res.status(400).send({ msg: "You can't choose this time" });
    }

    const myMomentEnd = moment.tz(`${date} ${endat}:00`, "Asia/Kolkata");
    const endTime = myMomentEnd.format();

    if (startTime === "Invalid date" || endTime === "Invalid date") {
      return res.status(400).send({ msg: "Invalid time or date format" });
    }
    // console.log(startTime,endTime,endTime>startTime)
    if (endTime <= startTime) {
      return res
        .status(400)
        .send({ msg: "End time should be greater than start time" });
    }
    const event = await Event.insertMany([
      {
        limit,
        title,
        description,
        venue,
        state,
        date,
        startat: startTime,
        endat: endTime,
        organisedby: user._id,
      },
    ]);
    const usercredential = await User.findById(user._id);
    usercredential.eventOrganising.push(event[0]._id);
    await usercredential.save();
    res.send({ msg: "Event got created successfully" });
  } catch (err) {
    return res.status(401).send({ msg: err.message });
  }
};

exports.eventbycity = async (req, res) => {
  try {
    const { city } = req.query;
    const allevent = await Event.find({
      state: { $regex: city },
      date: { $gt: timeconvertor() },
    }).sort({ date: 1, startat: 1 });
    res.send(allevent);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
};

exports.bookticket = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    const user = req.user;
    if (event == undefined) {
      return res.status(401).send({ msg: "Check the event you applying for." });
    }
    if (event.partcipants.length === event.limit) {
      return res.status(401).send({ msg: "No seats avaiable" });
    }
    const validation = await EventPass.findOne({
      userid: user.id,
      eventid: id,
    });
    if (validation) {
      if (validation.status == "pending") {
        return res
          .status(400)
          .send({ msg: "Kindly wait for the conformation" });
      } else if (validation.status == "rejected") {
        return res
          .status(401)
          .send({ msg: "Sorry Admin rejected your request" });
      } else {
        return res.status(200).send({ msg: "Already accepted" });
      }
    }

    const eventticket = await EventPass.insertMany([
      {
        eventid: event._id,
        userid: user._id,
        status: "pending",
      },
    ]);
    return res.send({
      msg: "You have been registered successfully kindy wait for the conformation",
    });
  } catch (err) {
    res.status(401).send({ msg: err.message });
  }
};

exports.conformticket = async (req, res) => {
  try {
    const { eventid } = req.params;
    const { eventpassid, status } = req.body;
    const eventbypass = await EventPass.findById(eventpassid);
    const user = req.user;
    const mainevent = await Event.findById(eventid);
    if (mainevent.organisedby.toString() !== user._id.toString()) {
      return res.status(400).send({ msg: "Access denied" });
    }
    if (
      eventbypass.status === "rejected" ||
      eventbypass.status === "accepted"
    ) {
      return res.status(401).send({ msg: `Already ${eventbypass.status}` });
    }

    if (
      status === "accepted" &&
      mainevent.partcipants.length < mainevent.limit
    ) {
      console.log(eventbypass);
      eventbypass.status = "accepted";
      await eventbypass.save();
      mainevent.partcipants.push(eventbypass.userid);
      await mainevent.save();
      return res.status(200).send({ msg: "Request got accepted" });
    }
    eventbypass.status = "rejected";
    await eventbypass.save();
    return res.status(200).send({ msg: "Request got rejected" });
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ "msg": err.message });
  }
};

exports.getdetailofevent = async (req, res) => {
  try {
    const { eventid } = req.params;
    const event = await Event.findById(eventid).populate("organisedby");
    if (event !== undefined) {
      let obj = Object.assign({}, event);
      obj = obj._doc;
      obj.seats = event.limit - event.partcipants.length;
      console.log(obj);
      return res.status(200).send(obj);
    }
    return res.status(500).send({ msg: "error occured" });
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};

exports.mydashboard = async (req, res) => {
  try {
    const { _id } = req.user;
    const stringId=_id["valueOf"]();
    console.log(_id,typeof _id)
    const data = await EventPass.aggregate([
      {
        $lookup: {
          from: "events", // the name of the events collection
          localField: "eventid",
          foreignField: "_id",
          as: "event",
        },
      },
      {
        $match: {
          "event.date": { $gt: timeconvertor() },
          userid: _id,
        },
      },
    ]);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send({ msg: err.message });
  }
};

exports.requestalldata = async function (req, res) {
  try{
    const { _id } = req.user;
    let {status}=req.query;
    if(status==""){
      status='undefined'
    }
    // const abc=status!=="undefined"?[status]:["pending","accepted","rejected"];
    // console.log(abc,status)
  const data = await EventPass.aggregate([
    {
      $lookup: {
        from: "events", // the name of the events collection
        localField: "eventid",
        foreignField: "_id",
        as: "event",
      },
    },
    {
      $lookup: {
        from: "users", // the name of the events collection
        localField: "event.organisedby",
        foreignField: "_id",
        as: "newuser",
      },
    },
    {
      $lookup: {
        from: "users", // the name of the events collection
        localField: "userid",
        foreignField: "_id",
        as: "requestuser",
      },
    },
    {
      $match: {
        "event.organisedby": _id,
        "event.date": { $gt: timeconvertor() },
        "status":{
          $in:status!=="undefined"?[status]:["pending","accepted","rejected"]
        }
      },
    },
  ]);
  res.status(200).send(data);
  } catch(err){
       res.status(500).send({"msg":err.message})
  }
};


exports.rejectpendingone= async function (req,res){
  try{
    let events=await EventPass.aggregate([
      {
        $lookup:{
          from: "events", // the name of the events collection
          localField: "eventid",
          foreignField: "_id",
          as: "event",
        }
      },{
        $match:{
          "event.date":{ $lt: timeconvertor() }
        }
      }
     ])
     let length=0
     events.forEach(async ({_id,status})=>{
        const data=await EventPass.findOne({_id,status:"pending"});
         if(data){
          length++
          data.status="rejected";
          await data.save()
        }
     })
     res.status(200).send({"msg":`${events.length} document status got vanished`})
  }catch(err){
  return res.status(400).send({"msg":err.message})
  }
}