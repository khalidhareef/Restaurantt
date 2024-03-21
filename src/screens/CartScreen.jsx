import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Actions/CartActions'
import { deleteFromCart } from '../Actions/CartActions'
function CartScreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()

    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-md-6'>
                <h1 style={{ fontSize: '40px',backgroundColor:'#3f3e3e' , color:'orange'}} className='text-center border border-black'>MY CART</h1>
                {cartItems.map(item => {
                    return <div className='flex-container border border-black p-3 ms-1'>

                        <div className='text-left m-1 w-100'>
                            <h4>{item.name} [{item.varient}]</h4>
                            <h2 style={{ fontSize: '20px', fontFamily: 'Anta' }}>Price:{item.quantity}*{item.prices[0][item.varient]}={item.price}</h2>
                            <h3 style={{ display: 'inline' }}>Quantity</h3>
                            <i style={{ color: 'green' }} class="fa-solid fa-plus m-3" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                            <b>{item.quantity}</b>
                            <i style={{ color: 'red' }} class="fa-solid fa-minus m-3" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                        </div>
                        <div className='m-1 w-50'>
                            <img src={item.image} style={{ height: '80px', width: '80px' }} alt="" />
                        </div>
                        <div >
                            <i style={{ color: 'red' }} class="fa-solid fa-trash mt-3" onClick={() => (dispatch(deleteFromCart(item)))}></i>
                        </div>



                    </div>
                })}

            </div>

            <div className='col-md-4'>
            <h1 style={{ fontSize: '25px',backgroundColor:'#3f3e3e' , color:'orange'}} className='text-center border border-black p-2 '>Total payable Amount</h1>
                <h3 className='text-center mt-4'>Subtotal: <span style={{color:'green'}}>{subtotal}Rs/-</span></h3>
                <button className='ms-2 rounded-3 p-2' style={{color:'whitesmoke', backgroundColor:'green'}}>Pay Now</button>
            </div>

        </div>
    )
}

export default CartScreen