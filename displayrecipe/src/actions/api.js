import axios from 'axios';

const postRecipe = (url = 'http://localhost:4060/postRecipe/') => {
  return {
    fetchAll: async () => await axios.get(url),
    update: (id, updateRecipe) => axios.put(url + id, updateRecipe),
  };
};

export default { postRecipe };
