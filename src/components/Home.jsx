import React from 'react'
import { Button, Card, Carousel, Container, Form, Nav, Navbar } from 'react-bootstrap'
import vid1 from '../assets/carousel.mp4'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import RestaurantReviewCard from './Cardd';
function Home() {

  return (
    <div >


      <Navbar expand="lg" className="bg-light position-fixed top-0 w-100" style={{ zIndex: '1' }}>
        <Container fluid>
          <Navbar.Brand href="#"> <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" alt="" width="80" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-4" >Search</button>
          
              <Link to='/cart'> <button className='me-3 rounded px-3 p-2'><i class="fa-solid fa-bag-shopping"></i></button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container-fluid mt-3'>
        <video autoPlay muted loop style={{ width: '100%' }} >
          <source src={vid1} type='video/mp4' />
        </video>
      </div>

      <div className='container-fluid mt-3 col-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '400px' }}>
        <div className='mt-3 col-6'>
          <img src="https://static.vecteezy.com/system/resources/previews/018/807/806/original/customer-and-waiter-in-restaurant-cartoon-vector.jpg" alt="" style={{ height: '200px', width: '220px',marginLeft:'50px' }} />
          <img src="https://i.pinimg.com/originals/03/20/c2/0320c2ae436911994548fa0c2afe0f27.jpg" alt="" style={{ height: '200px', width: '350px' }} />
          <p style={{fontFamily:'Anta'}}>Chef House is a family-owned restaurant that serves authentic Indian dishes in the heart of Kochi. Whether you’re looking for a hearty breakfast, a satisfying lunch, or a cozy dinner, you’ll find something to please your palate at chef house. Our menu features traditional favorites such as chicken biryani and peneer tikka, as well as our signature dish peperoni pizza that has won several awards. All our food is made with fresh, local ingredients and cooked to perfection by our experienced chefs. We also offer a variety of beverages, desserts, and catering options to suit any occasion. Come and enjoy the warm hospitality and delicious food at chef house today!</p>
        </div>
        <div className='mt-3 col-3'>
          <Link to='/nonveg'>
          <button className='p-3 rounded-5 border border-green' style={{color:'white',backgroundColor:'green',marginLeft:'200px',animation:'shake 0.2s infinite'}}>Order Now <i class="fa-solid fa-arrow-right"></i></button>
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: '#3f3e3e' }}>
                <p id='text ' style={{ fontFamily: 'Anta',textAlign:'center',fontSize:'30px', color:'white' }}>REVIEWS </p>
            </div>
            <div>
                <RestaurantReviewCard/>
                
            </div>
            <div className='col-12 d-flex ms-4' style={{justifyContent:'center'}}>
                    <Link to='/review'>
                        <button className='ms-4 p-3 rounded-3 mt-5'  style={{backgroundColor:'#3f3e3e', color:'orange'}}>READ/ADD MORE REVIEWS</button>
                    </Link>
                </div>
      <Footer/>
    </div>
  )
}

export default Home