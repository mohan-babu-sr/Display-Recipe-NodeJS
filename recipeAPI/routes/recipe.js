const express = require('express');
const router = express.Router();

const postRecipeController = require('../controllers/postRecipeController');

router.get('/', postRecipeController.getRecipes);

router.put('/:id', postRecipeController.updateRecipe);

module.exports = router;
