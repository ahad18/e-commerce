import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';


const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the ID
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div> 
      <Header />
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
     
    </div>
  );
};

export default Product;
