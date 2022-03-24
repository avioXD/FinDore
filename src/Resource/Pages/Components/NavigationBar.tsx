import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Container fluid className="flex-center ">
        <Container style={{ maxWidth: "60rem" }} className="mx-2">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand
              href="#"
              className="title-primary h-2 animate-char-dark"
            >
              FinDoor
            </Navbar.Brand>
            <Navbar.Toggle
              className="custom-toggler"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2  flex-center" navbarScroll>
                <Nav.Link href="#action1">About Us</Nav.Link>
                <Nav.Link href="#action2">Services & Pricing</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
                <Nav.Link href="#">Resources</Nav.Link>
                <Nav.Link href="#">Calendar</Nav.Link>
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
