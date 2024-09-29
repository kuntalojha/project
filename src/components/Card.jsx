import React, { useEffect, useState } from 'react';
import getProducts from '@/api/productApi';
import getCategories from '@/api/categoriesApi';

const Card = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  console.log(products);

  useEffect(() => {
    const fetchCategorys = async () => {
      const categoriesData = await getCategories();
      setCategory(categoriesData);
    };

    fetchCategorys();
  }, []);

  console.log(categories);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-5'>
      <h1 className='text-2xl font-bold mb-5'>Product List</h1>
      {/* Display products start here */}
      {products ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.products.map((product) => (
            <div
              key={product.id}
              className='border border-gray-300 rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={product.imageUrl} // Assuming you have an image URL in your product data
                alt={product.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
                <p className='text-gray-700'>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* Display products end here */}
    </div>
  );
};

export default Card;

// import React, { useEffect, useState } from 'react';
// import getProducts from '@/api/productApi';

// const Card = () => {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsData = await getProducts();
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, []);

//   console.log(products);

//   return (
//     <div>
//       <div className='min-h-screen h-min'>
//         <h1>Task</h1>
//         {/* Display products start here */}
//         {products ? (
//           <ul>
//             {products.products.map((product) => (
//               <li key={product.id}>
//                 {product.title} - ${product.price}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading...</p>
//         )}
//         {/* Display products end here */}
//       </div>{' '}
//     </div>
//   );
// };

// export default Card;

// import React, { useEffect, useState } from 'react';
// import getProducts from '@/api/productApi';

// const Card = () => {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsData = await getProducts();
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, []);

//   console.log(products);

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5'>
//       <h1 className='text-2xl font-bold mb-5'>Product List</h1>
//       {/* Display products start here */}
//       {products ? (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {products.products.map((product) => (
//             <div
//               key={product.id}
//               className='bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden'
//             >
//               <img
//                 src={product.imageUrl} // Assuming you have an image URL in your product data
//                 alt={product.title}
//                 className='w-full h-48 object-cover'
//               />
//               <div className='p-4'>
//                 <h2 className='text-lg font-semibold'>{product.title}</h2>
//                 <p className='text-gray-700'>${product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       {/* Display products end here */}
//     </div>
//   );
// };

// export default Card;
