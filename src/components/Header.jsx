import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


function Header() {
    const showAlert=()=>{
        alert("Login to Order Food")
    }
    const showAlert1=()=>{
        alert("Login to View your Cart")
    }
  return (
    <div>
         <div className='navbarr'>
                <Navbar fixed='top' expand="lg" className="nav1" style={{ backgroundColor: '#3f3e3e', fontFamily: 'Anta', }} >
                    <Container fluid >
                        <Navbar.Brand href="/" style={{ marginLeft: '400px' }}>
                            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" alt="" width="80" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Form className="d-flex"  >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 rounded-4 border border-warning"
                                aria-label="Search"
                                style={{ width: '400px', backgroundColor: 'grey' }}
                            />
                            <Button variant="outline-warning rounded-4">Search</Button>
                        </Form>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 px-3"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/login" style={{ color: 'orange' }}><i class="fa-solid fa-user"></i>Login</Nav.Link>

                                <Nav.Link href="/login" style={{ color: 'orange' }} onClick={showAlert1}><i class="fa-solid fa-cart-shopping"></i>My Cart</Nav.Link>

                                <Nav.Link href="/register" style={{ color: 'orange' }} onClick={showAlert}><i class="fa fa-cutlery"></i>Order Food</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
             
            </div>
    </div>
  )
}

export default Header