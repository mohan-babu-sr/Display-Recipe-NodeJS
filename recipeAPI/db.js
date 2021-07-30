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
