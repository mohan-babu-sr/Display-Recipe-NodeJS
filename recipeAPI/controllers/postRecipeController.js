const { PostRecipe } = require('../modals/postRecipe');
const Recipe = require('../modals/userRecipe');
const ObjectID = require('mongoose').Types.ObjectId;
let newRecipe,
  title,
  cooking_time,
  image_url,
  ingredients,
  publisher,
  servings,
  source_url,
  display_recipe = 0;

// update single recipe
exports.updateRecipe = (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send('No record with given id:' + req.params.id);
  }

  PostRecipe.aggregate([{ $sample: { size: 1 } }]).then(singleRecipe => {
    console.log('singleRecipe fetched..!');
    console.log(req.params.id, singleRecipe[0].title);
    const updateRecipe = {
      title: singleRecipe[0].title,
      servings: singleRecipe[0].servings,
      image_url: singleRecipe[0].image_url,
      publisher: singleRecipe[0].publisher,
      ingredients: singleRecipe[0].ingredients,
      cooking_time: singleRecipe[0].cooking_time,
      source_url: singleRecipe[0].source_url,
    };
    Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: updateRecipe },
      { new: true },
      (err, docs) => {
        if (!err) {
          console.log('findByIdAndUpdate');
          res.send(updateRecipe);
        } else
          console.log(
            'Error while Updating a records: ' +
              JSON.stringify(err, undefined, 2)
          );
      }
    );
  });
};

// Fetch 21 recipe
exports.getRecipes = (req, res, next) => {
  console.log(req.session.id);
  console.log(req.session.isClient);
  if (!req.session.isClient) {
    req.session.isClient = true;
    console.log('session added...!');

    PostRecipe.aggregate([{ $sample: { size: 21 } }]).then(data => {
      // res.setHeader('Set-Cookie', `dataFetched =${data} `);
      // req.session.save();
      return res.send(data);
    });
  } else {
    console.log('session already there...!');
    return res.send('data avaliable in local storage..!');
  }
};

// exports.getRecipes = (req, res, next) => {
//   Recipe.deleteMany()
//     .then(() => {
//       console.log('-----------recipes removed..!');
//     })
//     .catch(err => console.log('No data found'));

//   PostRecipe.aggregate([{ $sample: { size: 2 } }]).then(data => {
//     for (let i in data) {
//       cooking_time = data[i].cooking_time;
//       image_url = data[i].image_url;
//       ingredients = data[i].ingredients;
//       publisher = data[i].publisher;
//       servings = data[i].servings;
//       source_url = data[i].source_url;
//       title = data[i].title;
//       console.log('recipe adding');

//       newRecipe = new Recipe({
//         cooking_time,
//         image_url,
//         ingredients,
//         publisher,
//         servings,
//         source_url,
//         title,
//       });
//       newRecipe.save();
//     }

//     Recipe.find()
//       .then(data => {
//         console.log(data.length);
//         return res.send(data);
//       })
//       .catch(err => console.log('No data found'));

//     // return res.send(data);
//   });
// };
