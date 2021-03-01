import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Brand,
} from "react-bootstrap";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Navbar.Brand className="brand p-2" href="/">
          {"{  Andy Czeropski  }"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links-container ml-auto">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-link" href="/resume">
              Resume
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about">
              About
            </Nav.Link>
            <Button variant="outline-info" href="mailto:acz0919@yahoo.com">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
