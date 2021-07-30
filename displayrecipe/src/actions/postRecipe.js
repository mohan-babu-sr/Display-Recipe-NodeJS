import api from './api.js';

export const ACTION_TYPES = {
  UPDATE: 'UPDATE',
  FETCH_ALL: 'FETCH_ALL',
};

export const fetchAll = () => dispatch => {
  api
    .postRecipe()
    .fetchAll()
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const update = (id, data) => dispatch => {
  console.log('oldObject', id, data.title);
  api
    .postRecipe()
    .update(id, data)
    .then(res => {
      // console.log(res.data, id);
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
        oldID: id,
      });
    })
    .catch(err => console.log(err));
};
