import React, { useState } from 'react'
import Homescreen from '../screens/Homescreen'
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../Actions/CartActions';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';


function Nonveg({ food }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')

  const dispatch= useDispatch()
  function adddtocart(){
  dispatch(addToCart(food, quantity, varient))
  }
  return (
    <div>
      
    <div style={{ margin: '60px' }} className="shadow p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
      <h1 style={{ fontSize: '20px', alignItems:'center', display:'flex', justifyContent:'center' }}>{food.name}</h1>
      <img src={food.image} className="img-fluid m-5" style={{ width: '200px', height: '200px', }} />
      </div>
      
      <div className="flex-container">
        <div className='w-100 m-1'>
          <p>Varients</p>
          <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }} >
            {food.varients.map(varient => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>

            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-1' style={{fontSize:'25px'}}>Price:{food.prices[0][varient] * quantity}Rs/-</h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onClick={adddtocart} style={{ backgroundColor: 'red', color: 'white' }}>Add to Cart</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.image} className='img-fluid' style={{height:'400px'}} />
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Nonveg