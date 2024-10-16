import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; // Import Alert from Material UI
import Swal from 'sweetalert2'

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false); // State for Snackbar

  // Fetch product details
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  // Handle Snackbar open
  const handleClick = () => {
    setOpen(true);
  };

  // Handle Snackbar close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const showalert = () => {
    Swal.fire({
      
      icon: 'info',
      title: 'This is a demo website. No payment is involved. <b>Abdul Ahad</b> Thank you!',
      showConfirmButton: false,
      timer: 3500
    })
  }

  if (!product) return <Loading />;

  return (
    <div> 
      <Header />
      <div className='container mx-auto flex justify-around py-10'>
        <img src={product.image} alt={product.title} style={{ width: '200px' }} className=' flex justify-center align-middle' />
        <div className='w-1/2'>
          <h1 className='text-2xl'>{product.title}</h1>
          <p className='pt-4'>{product.description}</p>
          <h3 className='font-bold pt-4'>Price: Rs {product.price}/-</h3>
          <Rating name="read-only" value={product.rating.rate} readOnly />
          <h3 className='font-bold pt-4'>Category: {product.category}</h3>
          <h3 className='font-bold pt-4'>Quantity: {product.rating.count}</h3>
          <div>
            <Button style={{ backgroundColor: "#000" }} variant="contained" onClick={handleClick}>add to cart</Button>
            <Button color='black' style={{ borderColor: '#000', marginLeft: '20px' }} variant="outlined" onClick={showalert}>check out</Button>
           
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                item added to cart succsessfully!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
