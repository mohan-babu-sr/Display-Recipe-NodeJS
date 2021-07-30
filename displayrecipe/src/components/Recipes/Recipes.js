import React, { useState, useEffect } from 'react';
import Ing from '../Ingredients/Ing';

import classes from '../PostRecipes.module.css';
import classesWeek from './Recipes.module.css';
import RecipeModal from './RecipeModal';
import * as actions from '../../actions/postRecipe';
import { connect } from 'react-redux';
const moment = require('moment');

let dataID = [];
const Recipes = props => {
  const weekData = props.data;
  console.log('weekData : ', weekData);
  const ID = JSON.parse(localStorage.getItem('IDArray'));
  const [changeData, setChangeData] = useState(weekData);
  const [storeData, setStoreData] = useState(ID);

  weekData.map(data => {
    dataID.push(data);
    return dataID;
  });

  //
  const currentDate = new Date().toISOString().slice(0, 10);
  // console.log(currentDate);

  function getDateOfWeekday(refday) {
    var days = {
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
      sunday: 0,
    };
    if (!days.hasOwnProperty(refday))
      throw new Error(refday + ' is not listed in ' + JSON.stringify(days));
    var currDate = new Date();
    // var currTimestamp = currDate.getTime();
    var triggerDay = days[refday];
    // var dayMillDiff = 0;
    var dayInMill = 1000 * 60 * 60 * 24;
    while (currDate.getDay() !== triggerDay) {
      // dayMillDiff += dayInMill;
      currDate = new Date(currDate.getTime() + dayInMill);
    }
    return currDate.toISOString().slice(0, 10);
  }

  var saturday = getDateOfWeekday('saturday');

  let checkDate = moment(currentDate).isBefore(saturday);
  // console.log(checkDate, saturday);
  //

  const IDDATA = ID ? 'data' : 'empty';

  if (IDDATA === 'empty' || checkDate === false) {
    setStoreData(changeData);
    localStorage.setItem('IDArray', JSON.stringify(dataID));
    console.log('data added to local storage');
  } else {
    console.log('local storage data avaliable');
  }

  const changeRecipe = data => {
    // console.log(data);

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

  useEffect(() => {
    setStoreData(ID);
  }, [IDDATA]);

  return (
    <div>
      <span className={classesWeek.monday}>Monday</span>
      <span className={classesWeek.tuesday}>Tuesday</span>
      <span className={classesWeek.wednesday}>Wednesday</span>
      <span className={classesWeek.thursday}>Thursday</span>
      <span className={classesWeek.friday}>Friday</span>
      <span className={classesWeek.saturday}>Saturday</span>
      <span className={classesWeek.sunday}>Sunday</span>

      <div className={classes.container}>
        {Object.entries(weekData).map(([id, data]) => {
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
                <button onClick={e => changeRecipe(data)}>
                  <img src='https://img.icons8.com/material-two-tone/24/000000/change--v1.png' />
                </button>
              </div>
              <RecipeModal modalData={data} />
            </div>
          );
        })}
      </div>
      <Ing PostRecipesIngredients={changeData} />
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
