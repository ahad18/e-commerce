import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (

        <div>
            <div className='flex justify-center align-middle bg-black py-2'>
                <h2 className='text-white'>Free shipping order above RS:2500/-</h2>
            </div>
    <div className='flex justify-around align-middle py-4 container mx-auto'>
        <img src="src/assets/logo.png" alt="" />
    
    
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
        <li><a href="/" className='font-semibold'>Home</a></li>
        <li><a href="/" className='font-semibold'>Shop</a></li>
        <li><a href="/" className='font-semibold'>Cart</a></li>
        <li><a href="/" className='font-semibold'>Sale</a></li>
    </div>

    </div>
  )
}

export default Header