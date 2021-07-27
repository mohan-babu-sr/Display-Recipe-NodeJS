const mongoose = require('mongoose');

const PostRecipe = mongoose.model(
  'recipes',
  {
    cooking_time: { type: Number, required: true },
    id: { type: String, required: true },
    image_url: { type: String, required: true },
    ingredients: { type: Array, required: true },
    publisher: { type: String, required: true },
    servings: { type: Number, required: true },
    source_url: { type: String, required: true },
    title: { type: String, required: true },
  },
  'recipes'
);

module.exports = { PostRecipe };
