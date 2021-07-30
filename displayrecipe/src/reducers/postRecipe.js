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
    case ACTION_TYPES.UPDATE:
      // console.log('action.payload', action.payload);
      // console.log('action.oldID', action.oldID);

      const newObject = {
        _id: action.oldID,
        ...action.payload,
      };
      console.log('newObject', newObject._id, newObject.title);

      return {
        ...state,
        list: state.list.map(x => (x._id === action.oldID ? newObject : x)),
      };
    default:
      return state;
  }
};
