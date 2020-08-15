import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => { 
	return (
		<Card.Body>
			<Card.Text>
				Hi - I’m Andrea, and this website the result of my first day of #100DaysofCode. I’m adding new features and building this out every day so please visit back often. Up next is more React functionality and soon, some ThreeJS visuals. 
				<br />
				<br />
				I attended DevBootcamp a few years ago before it closed (rip🥺) got a bad case of imposter syndrome and an unrelated job, and stopped programming. I enrolled in MICA’s MPS UX program earlier this year, and once I dipped my toes back into tech, ohhhhh did my passion for programming re-ignite. I’m finishing the program and graduate in May 2021, but am aligning my focus back to finding a full stack or front end position where I can both grow as a programmer and help interface with the UX folks and integrate teams. Hire me!  
				<br />
				<br />
				In my free time, I have… a lot of hobbies. I like being outside, cooking (especially Thai food), sewing & pattern drafting, which, in terms of problem-solving and algorithmic thinking, has quite a lot in common with programming.
			</Card.Text>
		</Card.Body>
	)
}



export default About;