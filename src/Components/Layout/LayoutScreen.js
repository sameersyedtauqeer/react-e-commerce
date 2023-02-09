import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";

const LayoutScreen = () => {

    const state = useSelector((state) => state.handleCart)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="light" expand="lg">
                            <Container fluid>
                                <Link className='navbar-brand' to="">
                                    E-commerce
                                </Link>

                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Link className='nav-link' to=''>
                                            Home
                                        </Link>

                                        <Link className='nav-link' to='/products'>
                                            Products
                                        </Link>
                                        <Link className='nav-link' to='/cart'>
                                            Cart ({state.length})
                                        </Link>



                                    </Nav>
                                    <Link className='nav-link mx-3' to=''>
                                        Login
                                    </Link>

                                    <Link className='nav-link' to='/product'>
                                        Sign Up

                                    </Link>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div className="col-md-12 mt-5">
                        <Outlet />

                    </div>

                </div>
            </div>


        </>
    )
}

export default LayoutScreen