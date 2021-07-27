import { ACTION_TYPES } from '../actions/postRecipe';

const initialState = {
  list: [],
};

export const postRecipe = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
