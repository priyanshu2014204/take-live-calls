const express=require("express");
const { register, login, details } = require("../controller/user");
const { authenticated } = require("../middleware/auth");
const router=express.Router();

router.post("/register",register);
router.post("/login",login)
router.post("/details",authenticated,details)

module.exports=router

