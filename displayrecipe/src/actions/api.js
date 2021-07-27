import axios from 'axios';

const postRecipe = (url = 'http://localhost:4060/postRecipe/') => {
  return {
    fetchAll: async () => await axios.get(url),
  };
};

export default { postRecipe };
