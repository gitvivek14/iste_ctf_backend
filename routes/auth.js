const express = require ('express');
const router = express.Router();
const {login_post,signup} = require("../controllers/auth.controller")

// var bodyParser=require('body-parser');
// app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded and - multipart/form-data
// app.use(bodyParser.urlencoded({ extended: true }));


//Login API : /auth/login
router.post("/login",login_post);

//Signup API : /auth/signup
router.post("/signup",signup);

module.exports = router;