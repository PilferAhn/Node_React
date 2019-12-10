const express = require('express');
const postController = require('../controllers/Post'); 
const {requireSignin} = require('../controllers/Auth'); 
const validator = require('../validators');

const router = express.Router();

router.get("/",requireSignin ,postController.getPosts);
router.post("/post", validator.createPostValidator , postController.createPost) ;

 
module.exports = router;
 
  