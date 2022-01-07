import React from 'react';
import Clients from './Clients';
import RegisteredDomestics from './RegisteredDomestics';
import Sales from './Sales';
import Service from './Service';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './dashboard.css'


export default function Dashboard() {
  return (
<div className="container-fluid">
    
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Domestic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Dashboard</Nav.Link>
        <Nav.Link href="#link">Sign Up</Nav.Link>
        <NavDropdown title="Service Bouquet" href="#service" id="basic-nav-dropdown">
          <NavDropdown.Item href="#service">Service Bouquet</NavDropdown.Item>
          <NavDropdown.Item href="#sub-service">Sub-Service Bouquet</NavDropdown.Item>

          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <div className="Dashboard">
    
     <div className='header mt-5'>
       <h4>Dashboard</h4>
       <div className="row">
         <div className="col-md-6">
         <Sales />
         </div>
         <div className="col-md-6">
         <Clients/>
         </div>
         <div className="col m-5">
       <RegisteredDomestics />
       </div>
       </div>
         
      
      
      
     </div>
      </div>
      <div className="service #service ">
    <Service/>
    </div>
    </div>
  );
}

