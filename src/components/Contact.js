import React from 'react';

const Contact = () => {
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";

	return (
  <>
    <section className="contact-me" id="contact">
     	<h2>Get in touch</h2>
        <h3>You search for a front-end developer or wanna talk about a project ? <br/>
            Contact me ! let's see how we can work together.</h3>
        <hr/>
        <p>
          <a  href={email} 
              alt='send an email' 
              target="_blank" 
              aria-label="send an email"
              rel="noopener noreferrer">
                Send an email
          </a>
        </p>
        <p>
          <a  href={twitter} 
              alt="twitter" 
              target="_blank" 
              aria-label="Contact me on twitter"
              rel="noopener noreferrer">
                DM @S0ph1eM
          </a>
        </p>
        <p>
          <a  href={linkedin} 
              alt="linkedin" 
              target="_blank" 
              aria-label="Contact me on linkedin"
              rel="noopener noreferrer">
                Message on Linkedin
          </a>
        </p>
    </section>
  </>
	)
}


export default Contact;
