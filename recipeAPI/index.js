// require('./db');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const mongoose = require('mongoose');
require('./index');
const MongoDBSession = require('connect-mongodb-session')(session);

const mongoURI =
  'mongodb+srv://root:root@cluster0.avqb1.mongodb.net/recipeapp?retryWrites=true&w=majority';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log('MongoDB Connected..!');
    else
      console.log(
        'Error while Connecting.' + JSON.stringify(err, undefined, 2)
      );
  }
);

const store = new MongoDBSession({
  uri: mongoURI,
});

const postRecipeRoutes = require('./routes/recipe');

const app = express();

// app.use(
//   session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     maxAge: 30 * 60 * 1000,
//   })
// );

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      maxAge: 6000 * 30,
    },
  })
);

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/postRecipe', postRecipeRoutes);

app.listen(4060, () => {
  console.log('Server Started 4060');
});
