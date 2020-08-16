import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import NavBar from './components/navbar'
import About from './components/about'

const App = () => {
	return (
		<>
			<NavBar />
		</>
	)
}


ReactDOM.render(<App />, document.querySelector('#root'));