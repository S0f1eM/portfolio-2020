import React from 'react';


const Contact = () => {
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";

	return (
    <section className="contact-me" id="smContact">
     	<h2 className="contact-me">Get in touch</h2>
        <h3>Wanna talk about your project ? 
            Contact me and let's see how we can work together.</h3>
        <hr/>
        <p>
          <a  href={email} 
              alt='send an email' 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="send an email">
                Send an email
          </a>
        </p>
        <p>
          <a  href={twitter} 
              alt="twitter" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact me on twitter">
                DM @S0ph1eM
          </a>
        </p>
        <p>
          <a  href={linkedin} 
              alt="linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact me on linkedin">
                Message on Linkedin
          </a>
        </p>
    </section>
	)
}


export default Contact;