import React from 'react';
import { Nav, Navbar, Container,ButtonGroup, Dropdown} from 'react-bootstrap';
import {Mujer} from '../Mujer/Mujer'
import {Hombre} from '../Hombre/Hombre'
import Logo from '../img/logo.jpg'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <img className="logo" src={Logo} alt="logo" />
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Tienda</Nav.Link>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle  variant="" id="dropdown-custom-2" />
                        <Dropdown.Menu className="super-colors">
                        <Dropdown.Item eventKey="1"><Mujer/> </Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Hombre/> </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

    export default NavBar;