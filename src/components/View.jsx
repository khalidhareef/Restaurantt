import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import img1 from '../assets/image11.jpg'
import img2 from '../assets/image12.jpg'
import img3 from '../assets/image3.jpg'

import { Card, Carousel, CarouselItem } from 'react-bootstrap'
import Modal from './Modal';
import Home from './Home';
import Footer from './Footer';
import FeedbackForm from './Review';
import RestaurantReviewCard from './Cardd';
import Header from './Header';
import { Link } from 'react-router-dom';


// Use state to control the modal visibility

function View() {
    const [showModal, setShowModal] = React.useState(false);
    const showAlert = () => {
        alert('Login to Add a review!');
    };


    // Toggle the modal visibility
    const handleToggleModal = () => {
        setShowModal((prev) => !prev);
    };


    return (
        <div>
           <Header/>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item interval={1300}>
                        <img width="100%" height="650px" src={img1} alt="" />
                      
                        <Carousel.Caption >
                            <h3 style={{ fontFamily: 'Anta' }}>Our tables are set,
                                <br />and we're ready to impress</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1300}>
                        <img width="100%" height="650px" src={img2} alt="" />
                        <Carousel.Caption>
                            <h3 class="carouseltag" style={{ fontFamily: 'Anta' }}>Ready to serve,
                                <br /> Eager to please</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1300}>
                        <img src={img3} width="100%" height="650px" alt="" />
                        <Carousel.Caption>
                            <h3 class="carouseltag" style={{ fontFamily: 'Anta' }}>Fresh flavors,<br />
                                Fresh beginnings</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='cards ' >
                <Card style={{ width: '18rem' }} onClick={handleToggleModal}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/1409494988/vector/food-safety-knight-with-fork-instead-of-sword.jpg?s=612x612&w=0&k=20&c=A9t1ohAVQo_DfbHJVl8d0i8PCpa0k08psk2eqOqmze8=" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Food Hygiene</Card.Title>
                        <Modal show={showModal} handleClose={handleToggleModal} >
                            <h4 style={{ fontFamily: 'Anta' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nulla voluptate explicabo ab sint accusantium repudiandae deleniti vel, rerum impedit
                                incidunt nihil facilis odio neque error sunt amet odit praesentium!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime exercitationem
                                totam perferendis libero dolore dolor beatae recusandae suscipit maiores repellendus nulla, amet numquam. Dolorum nesciunt in nulla harum ab.</h4>

                        </Modal>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} onClick={handleToggleModal}>
                    <Card.Img variant="top" src="https://friendlystock.com/wp-content/uploads/2023/07/25-cartoon-waiter-serving-champagne-vector-clip-art-illustration.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Friendly Staff</Card.Title>
                        <Modal show={showModal} handleClose={handleToggleModal} >
                            <h4 style={{ fontFamily: 'Anta' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nulla voluptate explicabo ab sint accusantium repudiandae deleniti vel, rerum impedit
                                incidunt nihil facilis odio neque error sunt amet odit praesentium!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime exercitationem
                                totam perferendis libero dolore dolor beatae recusandae suscipit maiores repellendus nulla, amet numquam. Dolorum nesciunt in nulla harum ab.</h4>

                        </Modal>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} onClick={handleToggleModal}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.W7r7H3ugwvEQnXb6CR8ocAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Free Delivery</Card.Title>
                        <Modal show={showModal} handleClose={handleToggleModal} >
                            <h4 style={{ fontFamily: 'Anta' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nulla voluptate explicabo ab sint accusantium repudiandae deleniti vel, rerum impedit
                                incidunt nihil facilis odio neque error sunt amet odit praesentium!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime exercitationem
                                totam perferendis libero dolore dolor beatae recusandae suscipit maiores repellendus nulla, amet numquam. Dolorum nesciunt in nulla harum ab.</h4>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
            <div style={{ backgroundColor: '#3f3e3e' }}>
                <p id='text ' style={{ fontFamily: 'Anta',textAlign:'center',fontSize:'30px', color:'white' }}>REVIEWS </p>
            </div>
            <div>
                <RestaurantReviewCard/>
                
            </div>
            <div className='col-12 d-flex ms-4' style={{justifyContent:'center'}}>
                    <Link to='/login'>
                        <button className='ms-4 p-3 rounded-3 mt-5' onClick={showAlert} style={{backgroundColor:'#3f3e3e', color:'orange'}}>READ/ADD MORE REVIEWS</button>
                    </Link>
                </div>
            <Footer />
        </div>
        


    )
}

export default View