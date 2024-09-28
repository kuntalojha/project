import axios from 'axios';

const getProducts = async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products');
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getProducts;




// import axios from 'axios';
// const getProducts = async () => {
//   try {
//     const { data } = (response = await axios.get(
//       'https://dummyjson.com/products'
//     ));
//     return data;
//     // console.log(response);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     // always executed
//   }
// };

// export default getProducts;

// import axios from 'axios';

// const BASE_URL = 'https://dummyjson.com';

// export const getProducts = () => {
//   axios
//     .get('https://dummyjson.com/products')
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// import axios from 'axios';

// const BASE_URL = 'https://dummyjson.com';

// export const getProducts = async () => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/products`);
//     return data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };

// import axios from 'axios';

// export const getProducts = () => {
//   axios
//     .get('https://dummyjson.com/products')
//     .then(function (response) {
//       return response.data;
//       // handle success
//       // console.log(response.data);
//       // console.log(response.data.products);
//       // console.log(response.data.products[0]);
//       // console.log(response.data.products[1].title);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// };

// export default Home;
