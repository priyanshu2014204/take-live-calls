const { User } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// endpoint to register the user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res
        .status(400)
        .send({ msg: "user already exist try changing username or email" });
    }
    bcrypt.hash(password, 6, async (err, hash) => {
      if (hash) {
        const user = await User.insertMany([
          { username, email, password: hash },
        ]);
        const token = jwt.sign({ id: user[0]._id }, process.env.Secret_jwt, {
          expiresIn: 60 * 60,
        });
        res
          .status(200)
          .send({ msg: "You have been logged in successfully", token: token });
      } else {
        res.status(400).send({ msg: "an error occured" });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


// endpoint for the login 
exports.login = async (req, res) => {
  try {
    const {username, email, password } = req.body;
    let user = await User.findOne({$or:[{ email }, { username }]});
    if (!user) {
      return res.status(400).send({ err: "No user found with these credential" });
    }
    bcrypt.compare(password, user.password).then(function (result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, process.env.Secret_jwt, {
          expiresIn: 60 * 60,
        });
        res
          .status(200)
          .send({ msg: "You have been logged in successfully", token: token });
      } else {
        res.status(400).send({ alert: "wrong password alert" });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};






exports.details=(req,res)=>{
    try{
      return res.status(200).send(req.user)
    }catch(err){
       res.status(400).send({"msg":err.message})
    }
}