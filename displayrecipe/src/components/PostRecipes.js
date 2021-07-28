import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postRecipe';
import Recipes from './Recipes/Recipes';
import Spinner from './Spinner/spinner';

let recipeData;

const PostRecipes = props => {
  recipeData = props.postRecipeList;

  let check = 0;
  if (recipeData[0] === undefined) {
    console.log('Fetching Recipes..!');
  } else {
    check = 1;
    console.log('Fetching Done..!');
  }

  useEffect(() => {
    props.fetchAllPostRecipe();
  }, []);

  return (
    <div>
      {check === 0 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {check === 1 && <Recipes data={recipeData} recipeData={recipeData} />}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  postRecipeList: state.postRecipe.list,
});

const mapActionToProps = {
  fetchAllPostRecipe: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(PostRecipes);
