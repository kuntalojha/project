import React, { useEffect, useState } from 'react';
import getProducts from '@/api/productApi';
const Task = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className='min-h-screen h-min'>
      <h1>Task</h1>
      {/* Display products start here */}
      {products ? (
        <ul>
          {products.products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      {/* Display products end here */}
    </div>
  );
};

export default Task;
