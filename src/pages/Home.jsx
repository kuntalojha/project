import React from 'react';
import axios from 'axios';

const Home = () => {
  axios
    .get('https://dummyjson.com/products')
    .then(function (response) {
      // handle success
      console.log(response.data);
      console.log(response.data.products);
      console.log(response.data.products[0]);
      console.log(response.data.products[1].title);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <div className='h-screen'>
      <h1>hello from Home.jsx</h1>
    </div>
  );
};

export default Home;
