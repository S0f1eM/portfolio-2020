import React from 'react';


const About = () => {
	const text = "Hello, I'm Sophie. I am a Developer. I enjoy the creative process of building websites from scratch and playing with shapes and colors to create beautiful designs.";

	return (
     <section className="about-me smSpaceAround" id="SMabout">
        <p className="introduction">{text}</p>
      </section>
	)
}


export default About;