import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const products = [
  { id: 1, name: "Product 1", price: 100, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
  { id: 2, name: "Product 2", price: 150, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
  { id: 3, name: "Product 3", price: 200, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
  { id: 4, name: "Product 4", price: 250, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
  { id: 5, name: "Product 5", price: 300, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product 6", price: 350, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product 7", price: 400, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product 8", price: 450, image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product 9", price: 500, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Product 10", price: 550, image: "https://via.placeholder.com/150" },
  { id: 11, name: "Product 11", price: 600, image: "https://via.placeholder.com/150" },
  { id: 12, name: "Product 12", price: 650, image: "https://via.placeholder.com/150" },
  { id: 13, name: "Product 13", price: 700, image: "https://via.placeholder.com/150" },
  { id: 14, name: "Product 14", price: 750, image: "https://via.placeholder.com/150" },
  { id: 15, name: "Product 15", price: 800, image: "https://via.placeholder.com/150" },
  { id: 16, name: "Product 16", price: 850, image: "https://via.placeholder.com/150" },
  { id: 17, name: "Product 17", price: 900, image: "https://via.placeholder.com/150" },
  { id: 18, name: "Product 18", price: 950, image: "https://via.placeholder.com/150" },
  { id: 19, name: "Product 19", price: 1000, image: "https://via.placeholder.com/150" },
  { id: 20, name: "Product 20", price: 1050, image: "https://via.placeholder.com/150" }
];

const Home = () => {
  return (
    <>
    <Header />
    <div className='container mx-auto'>
      <div className='flex justify-center w-auto'>
        <div className='bg-black border rounded-2xl bg-cover py-40 px-96 '>
<h1 className='text-white'>hello</h1>
        </div>
        <div>
        <div className='bg-black border rounded-2xl bg-cover py-28 px-24 '>
<h1 className='text-white'>hello</h1>
        </div>
        <div className='bg-black border rounded-2xl bg-cover py-40 px-24 '>
<h1 className='text-white'>hello</h1>
        </div>
        <div className='bg-black border rounded-2xl bg-cover py-40 px-24 '>
<h1 className='text-white'>hello</h1>
        </div>
        </div>
        
      
      </div>
      
      <h1>Shop Now</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
              <h2>{product.name}</h2>
              <p className='text-bold text-blue-700'>Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
