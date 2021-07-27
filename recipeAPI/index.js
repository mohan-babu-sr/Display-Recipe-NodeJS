require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRecipeRoutes = require('./routes/recipe');

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/postRecipe', postRecipeRoutes);

app.listen(4060, () => {
  console.log('Server Started');
});
