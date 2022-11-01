import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';


export const Header = () => {
    return (
        <Navbar collapseOnSelect bg='info' variant='dark' expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                    <Nav.Link href='/dashboard'>DashBoard</Nav.Link>
                    <Nav.Link href='/tickets'>Tickets</Nav.Link>
                    <Nav.Link href='/logout'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}