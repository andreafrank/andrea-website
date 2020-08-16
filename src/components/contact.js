import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'


const Contact = () => {
	return (
		<Form>
		  <Form.Group controlId="myForm.ControlInput1">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control type="email" placeholder="name@example.com" />
		  </Form.Group>
		  <Form.Group controlId="myForm.ControlInput2">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control type="email" placeholder="name@example.com" />
		  </Form.Group>
		  </Form.Group>
		  <Form.Group controlId="myForm.ControlTextarea1">
		    <Form.Label>Example textarea</Form.Label>
		    <Form.Control as="textarea" rows="3" />
		  </Form.Group>
		</Form>
	)
}

export default Contact;