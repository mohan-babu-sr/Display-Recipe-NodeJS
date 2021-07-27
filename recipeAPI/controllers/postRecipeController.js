const { PostRecipe } = require('../modals/postRecipe');
const express = require('express');
const router = express.Router();
const Recipe = require('../modals/userRecipe');
const db = require('../db');
const mongoose = require('mongoose');
const { deleteOne } = require('../modals/userRecipe');

let newRecipe,
  title,
  cooking_time,
  image_url,
  ingredients,
  publisher,
  servings,
  source_url;

exports.getPosts = (req, res, next) => {
  Recipe.remove().then(data => {
    console.log(data);
  });

  Recipe.count().then(data => {
    console.log('Recipe', data);
  });

  PostRecipe.aggregate([{ $sample: { size: 21 } }]).then(data => {
    // console.log(data.length);

    for (let i = 0; i < 1; i++) {
      console.log('************************');
      console.log('recipe added');

      for (let i in data) {
        cooking_time = data[i].cooking_time;
        image_url = data[i].image_url;
        ingredients = data[i].ingredients;
        publisher = data[i].publisher;
        servings = data[i].servings;
        source_url = data[i].source_url;
        title = data[i].title;
        // console.log(title);

        newRecipe = new Recipe({
          cooking_time,
          image_url,
          ingredients,
          publisher,
          servings,
          source_url,
          title,
        });
        newRecipe.save();
      }
    }

    return res.send(data);
  });
};
