import React from 'react';

const Getintouch = () => {
  
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";
	
  return (
      <section className="contact-me" ole="main">

      <h2 tabindex="0">Contact me</h2>

        <p tabindex="0">Want to talk about a project or have any questions? To get in touch, feel free to contact me with one of the links below.</p>

          <p><a className="contact-links"
                href={email} 
                alt='send an email' 
                target="_blank" 
                aria-label="contact Sophie by email"
                rel="noopener noreferrer"><span>Contact by </span>mail
            </a></p>

          <p><a className="contact-links"
                href={twitter} 
                alt="twitter" 
                target="_blank" 
                aria-label="Contact Sophie on twitter"
                rel="noopener noreferrer"><span>Message on </span>twitter
            </a></p>

          <p><a className="contact-links"
                href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="Contact Sophie on linkedin"
                rel="noopener noreferrer"><span>Message on </span>Linkedin
            </a></p>

      </section>
	)
}


export default Getintouch;
