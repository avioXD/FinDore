import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <>
      <Container fluid className="flex-center ">
        <Container className="mx-2">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
              <Link to="/" className="title-primary h-2 animate-char-dark">
                {" "}
                Kbiafiling
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="custom-toggler"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2  flex-center" navbarScroll>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-link" to="/pricing">
                  Services & Pricing
                </Link>
                <Link className="nav-link" to="#">
                  Blog
                </Link>
                <Link className="nav-link" to="#">
                  Contact Us
                </Link>
                <Link className="nav-link" to="#">
                  Resources
                </Link>
                <Link className="nav-link" to="#">
                  Calendar
                </Link>
                <div>
                  <Button variant="primary" className="m-btn">
                    Login
                  </Button>
                  <Button variant="outline-primary" className="m-btn-outline">
                    Register
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </>
  );
}

export default NavigationBar;
