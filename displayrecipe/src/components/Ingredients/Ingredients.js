import React from 'react';
import classes from './Ingredients.module.css';

const Ingredients = props => {
  let allIngredients = [];
  const data = props.PostRecipesIngredients;

  if (data[0] === undefined) {
  } else {
    for (let i in data) {
      let ing = data[i].ingredients;
      for (let j in ing) {
        allIngredients.push(ing[j]);
      }
    }
  }

  // Ingredient Duplicate Test
  let count = 0,
    des,
    qn = 0;
  allIngredients.map(data => {
    des = data.description.toLowerCase().trim();
    if (des === 'olive oil') {
      qn += data.quantity;
      return count++;
    }
    console.log('olive oil', qn);
  });
  //

  return (
    <div className={classes.center}>
      <p className={classes.heading}>Ingredients</p>
      <div className={classes.main}>
        {allIngredients.map((data, idx) => {
          return (
            <div className={classes.container} key={idx}>
              <p className={classes.description} title={data.description}>
                Description : {data.description}
              </p>
              <p className={classes.quantityUnit}>
                {data.quantity === undefined
                  ? ''
                  : `Quantity : ${data.quantity}`}
                &nbsp;
                {data.unit.length === 0 ? '' : `• Unit : ${data.unit}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
