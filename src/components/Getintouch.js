import React from 'react';
import HomeHeader from './elements/HomeHeader';

const Getintouch = () => {
  
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";
  const content = "Searching for a developer to collaborate with ? Need help on a project and want to talk about? Feel free to contact me and share, I would love to hear from you. ";
	
  return (
      <section className="contact-me" id="getintouch" role="main">

        < HomeHeader content={content} />

        <div className="contact-link">
          
          <p><a  className="extern-link no-hover"
                href={email} 
                alt='send an email' 
                target="_blank" 
                aria-label="contact Sophie by email"
                rel="noopener noreferrer">Contact by mail
            </a></p>

          <p><a  className="extern-link no-hover"
                href={twitter} 
                alt="twitter" 
                target="_blank" 
                aria-label="Contact Sophie on twitter"
                rel="noopener noreferrer">Message on twitter
            </a></p>

           <p><a  className="extern-link no-hover" 
                href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="Contact Sophie on linkedin"
                rel="noopener noreferrer">Message on Linkedin
            </a></p>
        </div>

      </section>
	)
}


export default Getintouch;
