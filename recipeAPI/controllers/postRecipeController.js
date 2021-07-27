const { PostRecipe } = require('../modals/postRecipe');
const Recipe = require('../modals/userRecipe');

let newRecipe,
  title,
  cooking_time,
  image_url,
  ingredients,
  publisher,
  servings,
  source_url;

exports.getPosts = (req, res, next) => {
  PostRecipe.aggregate([{ $sample: { size: 21 } }]).then(data => {
    Recipe.remove().then(() => {
      console.log('recipes removed..!');
    });

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

    return res.send(data);
  });
};
