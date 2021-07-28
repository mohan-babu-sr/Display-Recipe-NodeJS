import React, { useState, useEffect } from 'react';
import Ingredients from '../Ingredients/Ingredients';
import classes from '../PostRecipes.module.css';
import RecipeModal from './RecipeModal';
import * as actions from '../../actions/postRecipe';
import { connect } from 'react-redux';

const Recipes = props => {
  const weekData = props.data;
  const [changeData, setChangeData] = useState(weekData);

  const changeRecipe = data => {
    console.log(data);

    const values = {
      _id: data._id,
      title: data.title,
      cooking_time: data.cooking_time,
      image_url: data.image_url,
      ingredients: data.ingredients,
      publisher: data.publisher,
      servings: data.servings,
      source_url: data.source_url,
    };
    props.updateRecipe(values._id, values);
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
                {/* <button onClick={e => clicked(data, id)}>Change</button> */}
                <button onClick={e => changeRecipe(data)}>Change</button>
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

const mapStateToProps = state => ({
  data: state.postRecipe.list,
});

const mapActionToProps = {
  updateRecipe: actions.update,
};
export default connect(mapStateToProps, mapActionToProps)(Recipes);
