import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => { 
	return (
		<Card.Body>
			<Card.Text>
				<div>
					Hi - I’m Andrea, and this website the result of my first day of #100DaysofCode. I’m adding new features 
					and building this out every day. Up next is more responsive design, React functionality, and soon, some 
					ThreeJS visuals.
				</div>
				<br />
				<div>
					I attended DevBootcamp a few years ago before it closed (rip🥺) got a bad case of imposter syndrome 
					and an unrelated job, and stopped programming. I enrolled in MICA’s MPS UX program earlier this year, 
					and once I dipped my toes back into tech, ohhhhh did my passion for programming re-ignite. I’m finishing 
					the program and graduate in May 2021, but am aligning my focus back to finding a full stack or front end 
					position where I can both grow as a programmer and help interface with the UX folks and integrate teams. 
				</div>
				<br />
				<div>
					In my free time, I have… a lot of hobbies. I like being outside, cooking (especially Thai food), sewing & 
					pattern drafting, which, in terms of problem-solving and algorithmic thinking, has quite a lot in common 
					with programming.
				</div>
				<br />
				<div>
					<div>Tomorrow, I will build functionality and content for the Navbar links and create a contact form.</div>
				</div>
				<Card.Text style={{fontStyle: 'italic'}}><div>8.15.2020</div></Card.Text>
			</Card.Text>
		</Card.Body>
	)
}



export default About;