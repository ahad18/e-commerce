import React from 'react'

function Header() {
  return (
    <div className='d-flex'>
    <h1 className='m-2 uppercase'>Ahadustore</h1>
    <div>
        <li><a href="/">Home</a></li>
        <li><a href="/">Shop</a></li>
        <li><a href="/">Cart</a></li>
        <li><a href="/">Sale</a></li>
    </div>
    <div>cart</div>
    <button>Login</button>
    </div>
  )
}

export default Header