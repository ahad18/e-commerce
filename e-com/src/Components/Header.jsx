import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom'


function Header() {
  return (

        <div>
            <div className='flex justify-center align-middle bg-black py-2'>
                
                <Marquee>
                <h2 className='text-white px-5'>Free shipping order above RS:2500/-</h2>
            5
                <h2 className='text-white px-5'>Free shipping order above RS:2500/-</h2>
                <h2 className='text-white px-5'>Free shipping order above RS:2500/-</h2>
                <h2 className='text-white px-5'>Free shipping order above RS:2500/-</h2>
</Marquee>
            </div>
    <div className='flex justify-around align-middle py-4 container mx-auto'>
    <Link to='/' className='flex justify-center align-middle'> <img src={logo} alt="logo"/></Link>
    
    
    <div class="flex w-1/3 mx-10 rounded bg-white">
        <input class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none " type="search" name="search" placeholder="Search..." />
        <button type="submit" class="m-2 rounded bg-black px-4 py-2 text-white">
            search
        </button>
    </div>
    
    <div className='flex gap-5'>
    
    <button ><FontAwesomeIcon icon={faUser} /> login</button>
    <button ><FontAwesomeIcon icon={faCartShopping} /> Cart</button>


    </div>
    </div>
    <div className='flex justify-center list-none gap-9 py-2 backge bg-stone-200'>
        
            <Link to='/' className='font-semibold'>Home</Link>
            <Link to='/shop'className='font-semibold'>Shop</Link>
            <Link to='/cart'className='font-semibold'>Cart</Link>
            <Link to='/sales'className='font-semibold'>Sales</Link>
       
       
    </div>

    </div>
  )
}

export default Header