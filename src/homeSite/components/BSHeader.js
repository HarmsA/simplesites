import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../images/SimpleSites-logo.png';
import classes from "./bsheader.module.css";

const BSHeader = () => {
    return (
        <div className={classes.headerContainer}>
          {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container fluid>

                <Navbar.Brand href="#"><img src={logo} alt="" width="350" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">About Us</Nav.Link>
                      <Nav.Link href="#action2">Product</Nav.Link>
                      <Nav.Link href="#action2">Contact Us</Nav.Link>
                      <NavDropdown
                        title="Templates"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                            Template 1
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Template 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action6">
                          Template 3
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action7">
                          Template 4
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action8">
                          Template 5
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item> */}
                      </NavDropdown>
                    </Nav>
                    {/* <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button> */}
                    {/* </Form> */}
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      );
    }
    

export default BSHeader;