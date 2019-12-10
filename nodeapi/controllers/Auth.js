const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/User");


exports.signup = async(req, res) => {
  const userExists = await User.findOne({email: req.body.email})
  if(userExists) return res.status(403).json({
      error: "Email is taken"
  });

  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ Message : "Signup Success! Please login" });
};

// 42, 43 start here
exports.signin = (req,res) => {
  // find the user based on email

  const {email, password} = req.body
  User.findOne({email}, (err, user) => {
    
    // if err, or no user
    if(err || !user) return res.status(401).json({
      error: "User with that email does not exist. Please signin"
    });

    // if user is found make sure the mail and password match
    // create authenticate emthod in model and use here
    // if error or no user
    // if user, authenticate
    if(!user.authenticate(password)){
      if(err || !user) return res.status(401).json({
        error: "Email and password do not match"
      });
    };

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

    // persist the token as 't' in cookie with expire date
    res.cookie("t", token, {expire: new Date() + 9999})

    // return respose with user and token to frontend client
    const {_id, name, email} = user
    return res.json({token, user: {_id, name, email}})
  });
  

  // genrate a token with user id and secret
};

exports.signout = (req,res) => {
  res.clearCookie("t");
  return res.json({message: "signout success!"});
};