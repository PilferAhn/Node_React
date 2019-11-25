const express = require('express');
const postController = require('../controllers/Post'); 

const router = express.Router();

router.get("/", postController.getPosts) ;

module.exports = router;
