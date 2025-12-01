import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Building2 } from 'lucide-react';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src="/img/logo_360_transparent.png" 
            alt="Pisarna360" 
            height="50" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#prednosti">Prednosti</Nav.Link>
            <Nav.Link href="#cenik">Cenik</Nav.Link>
            <Nav.Link href="#dokumentacija">Dokumentacija</Nav.Link>
            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
            <Button variant="primary" className="ms-lg-3 mt-2 mt-lg-0" href="#kontakt">
              Najemi zdaj
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
