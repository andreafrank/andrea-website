import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
	return (
		<div h1>
			hello
		</div>
	)
}


ReactDOM.render(<App />, document.querySelector('#root'));