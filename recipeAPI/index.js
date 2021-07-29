require('./db');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const postRecipeRoutes = require('./routes/recipe');
const cookieParser = require('cookie-parser');
const app = express();

// app.use(cookieParser());

app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/postRecipe', postRecipeRoutes);

app.listen(4060, () => {
  console.log('Server Started');
});
