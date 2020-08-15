import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
	return (
	    <Navbar className="color-nav" expand="lg">
	  		<Navbar.Brand style={{color: '#dc136c', fontWeight: 'bold'}} href="#home">Andrea Frank</Navbar.Brand>
	  		<Navbar.Toggle aria-controls="basic-navbar-nav" />
	  		<Navbar.Collapse id="basic-navbar-nav">
		    	<Nav className="mr-auto">
		      	<Nav.Link style={{color: '#abff4f'}} href="#about">About</Nav.Link>
		      	<Nav.Link style={{color: '#abff4f'}} href="#link">Projects</Nav.Link>
		      	<Nav.Link style={{color: '#abff4f'}} href="#link">Résumé</Nav.Link>
			      	<NavDropdown title="Blogs" id="green-color">
			        <NavDropdown.Item href="#action/3.1">Coming soon</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Coming soon v.2</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">Coming soon v.3</NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="#action/3.4">Coming soon v.4</NavDropdown.Item>
			      	</NavDropdown>
		   		</Nav>
		   		<Form inline>
			      	<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      	<Button style={{color: '#abff4f'}} variant="outline-success">Coming Soon</Button>
		    	</Form>
		</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar;