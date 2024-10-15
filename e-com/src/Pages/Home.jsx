import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Optional, you can also use fetch
import Header from '../Components/Header';
import Banner from '../Components/banner';

const Home = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from API on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);  // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <Header />
            <div className='container mx-auto'>
                <Banner />
                <h1 className="text-2xl font-bold mb-6">Shop Now</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-md">
                            <Link to={`/product/${product.id}`}>
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <p className="text-blue-700 font-bold mt-2">${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <></>
            </div>
        </>
    );
};

export default Home;
