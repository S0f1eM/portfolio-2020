import React from 'react';


const Contact = () => {
    const email = 'mailto:s.marchand56@gmail.com';
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";

	return (
	<div>
      <section id="smcontact">
     	<h2 className="contact-me">Get in touch</h2>
            <p>You Search for a developper or wanna talk about a project collaboration ?</p>
            <p>Contact me and let's see how we can work together !</p>
                <ul className="contactList">
                    <li>
                        <a href={email} alt='send an email' target="_blank" rel="noopener noreferrer">
                        Send an email</a>
                    </li>
                     <li>
                        <a href={twitter} alt="twitter" target="_blank" rel="noopener noreferrer">
                        DM @S0ph1eM
                        </a>
                    </li>
                       <li>
                        <a href={linkedin} alt="linkedin" target="_blank" rel="noopener noreferrer">
                        Message on Linkedin</a>
                    </li>
                </ul>
      </section>
    </div>
	)
}


export default Contact;