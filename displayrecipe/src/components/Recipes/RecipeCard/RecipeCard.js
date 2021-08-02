import React, { useState, useEffect } from 'react';
import classes from '../../PostRecipes.module.css';
import RecipeModal from '../RecipeModal/RecipeModal';

const RecipeCard = props => {
  const cardData = props.cardData;
  console.log(props);
  return (
    <div>
      <div className={classes.container}>
        {Object.entries(cardData).map(([id, data]) => {
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
                <button onClick={e => props.changeRecipe(data)}>
                  <img src='https://img.icons8.com/material-two-tone/24/000000/change--v1.png' />
                </button>
              </div>
              <RecipeModal modalData={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCard;
