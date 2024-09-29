import axios from 'axios';

const getCategories = async () => {
  try {
    const  data  = await axios.get(
      'https://dummyjson.com/products/categories'
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCategories;
