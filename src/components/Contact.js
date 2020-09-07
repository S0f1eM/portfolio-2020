import React from 'react';

const Contact = () => {
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";

	return (
  <>
    <section className="contact-me" id="contact">
     	<h2>Get in touch</h2>
        <div className="pattern medium"></div>
        <p className="get-in-touch">Searching for a developer to work with or wanna talk about a project? <br/>
            Contact me, let's see how we can collaborate !</p>
        <p>
          <a  href={email} 
              alt='send an email' 
              target="_blank" 
              aria-label="send an email"
              rel="noopener noreferrer"
              className="neon-blue">
                Send an email
          </a>
        </p>
        <p>
          <a  href={twitter} 
              alt="twitter" 
              target="_blank" 
              aria-label="Contact me on twitter"
              rel="noopener noreferrer"
              className="neon-blue">
                DM @S0ph1eM
          </a>
        </p>
        <p>
          <a  href={linkedin} 
              alt="linkedin" 
              target="_blank" 
              aria-label="Contact me on linkedin"
              rel="noopener noreferrer"
              className="neon-blue">
                Message on Linkedin
          </a>
        </p>
    </section>
  </>
	)
}


export default Contact;
