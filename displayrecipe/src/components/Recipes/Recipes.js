import React, { useState, useEffect } from 'react';
import Ingredients from '../Ingredients/Ingredients';
import classes from '../PostRecipes.module.css';
import RecipeModal from './RecipeModal';
const Recipes = props => {
  const weekData = props.data;
  // console.log(weekData);
  const [changeData, setChangeData] = useState(weekData);
  const clicked = (data, ids) => {
    console.log(data._id);

    weekData.splice(ids, 1);

    let changeRecipe = Math.floor(Math.random() * 2416);

    weekData.splice(ids, 0, props.recipeData[changeRecipe]);
    setChangeData(weekData);

    console.log(weekData);
  };

  return (
    <div>
      <div className={classes.container}>
        {Object.entries(changeData).map(([id, data]) => {
          return (
            <div key={id} className={classes.card}>
              <div className={classes.image}>
                <img
                  src={data.image_url}
                  alt='Not Found!'
                  width='90'
                  height='80'
                ></img>
              </div>
              <div className={classes.title} title={data.title}>
                {data.title}
              </div>

              <div className={classes.details}>
                <span>
                  <a
                    href={data.source_url}
                    target='_blank'
                    title='click to view details of recipe!'
                  >
                    Details
                  </a>
                </span>
                &nbsp;•&nbsp;
                <span title='cooking time of recipe!'>
                  {data.cooking_time}m
                </span>
                &nbsp;•&nbsp;
                <span>{data.servings} servings</span>
              </div>

              <div className={classes.btn}>
                <button onClick={e => clicked(data, id)}>Change</button>
              </div>
              <RecipeModal modalData={data} />
            </div>
          );
        })}
      </div>

      <Ingredients PostRecipesIngredients={changeData} />
    </div>
  );
};

export default Recipes;
