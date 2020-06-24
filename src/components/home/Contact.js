import React from 'react';


const Contact = props => {
  const email = 'mailto:s.marchand56@gmail.com';


	return (
    <section className="contact-me" id="smContact">
     	<h2 className="contact-me">Get in touch</h2>
        <h3>Wanna talk about your project ? Contact me and let's see how we can work together.</h3>
        <hr/>
        <p><a href={email} alt='send an email' target="_blank" rel="noopener noreferrer">
          Send an email</a></p>
        <p><a href={props.twitter} alt="twitter" target="_blank" rel="noopener noreferrer">
          DM @S0ph1eM</a></p>
        <p><a href={props.linkedin} alt="linkedin" target="_blank" rel="noopener noreferrer">
          Message on Linkedin</a></p>
    </section>
	)
}


export default Contact;