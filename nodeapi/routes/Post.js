const express = require('express');
const postController = require('../controllers/Post'); 
const validator = require('../validators');

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/post", validator.createPostValidator , postController.createPost) ;

module.exports = router;

 