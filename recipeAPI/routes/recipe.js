const express = require('express');
const router = express.Router();

const postRecipeController = require('../controllers/postRecipeController');

router.get('/', postRecipeController.getPosts);

module.exports = router;
