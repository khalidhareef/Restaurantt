import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const cartstate = useSelector(state=>state.cartReducer)
  return (
    <div><nav className='navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded'>
    <a className='navbar-brand' href="#">
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" alt="" width="80" />
    </a>
    <div className='collapse navbar-collapse' id="navbarNav">
        <ul className='navbar-nav ml-4'>
            <li className='nav-Item '>
                <a href="./cart" className='nav-link' style={{color:'black'}}>Cart {cartstate.cartItems.length}</a>
            </li>
            <li className='nav-Item'>
                <a href="./review" className='nav-link'>Reviews</a>
            </li>
        </ul>
    </div>
</nav></div>
  )
}

export default Navbar