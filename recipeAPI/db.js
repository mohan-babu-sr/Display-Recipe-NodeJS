const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://root:root@cluster0.avqb1.mongodb.net/recipeapp?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log('MongoDB Connected..!');
    else
      console.log(
        'Error while Connecting.' + JSON.stringify(err, undefined, 2)
      );
  }
);
