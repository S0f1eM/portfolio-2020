import React from 'react';
import SectionHeader from './elements/SectionHeader';

const Getintouch = () => {
  
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";
  const content = "Searching for a developer to work with or wanna talk about a project? I'm currently working but still searching for a full time remote job and/or a thrilling project that makes sense with a positive mindset. So feel free to contact me and let's see how we can collaborate.";
	
  return (
      <section className="contact-me">

        <h2>Let's get in touch !</h2>

        <SectionHeader content={content} />
                   
        <div className="contact-link">
          <p><a   href={email} 
                  alt='send an email' 
                  target="_blank" 
                  aria-label="send an email"
                  rel="noopener noreferrer">Send me an email</a></p>
          <p><a   href={twitter} 
                  alt="twitter" 
                  target="_blank" 
                  aria-label="Contact me on twitter"
                  rel="noopener noreferrer">DM me on Twitter @S0ph1eM</a></p>
           <p><a  href={linkedin} 
                  alt="linkedin" 
                  target="_blank" 
                  aria-label="Contact me on linkedin"
                  rel="noopener noreferrer">Let me a message on Linkedin</a></p>
        </div>
      </section>
	)
}


export default Getintouch;
