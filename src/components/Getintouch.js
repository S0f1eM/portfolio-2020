import React from 'react';
import SectionHeader from './elements/SectionHeader';
import Quote from './elements/Quote';

const Getintouch = () => {
  
  const email = 'mailto:s.marchand56@gmail.com';
  const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
  const twitter = "https://twitter.com/S0f1eM?lang=fr";
  const content = "Searching for a developer ? I'm currently working but I remain open to any remote job developer position.";
  const more = " Feel free to contact me, I would love to hear from you. ";
	
  const quote =`"What sunshine is to flowers, smiles are to humanity." Joseph Addison`;

  return (
      <section className="contact-me" id="getintouch" role="main">

        <SectionHeader content={content} more={more} />

        <div className="contact-link">
          
          <p><a  className="extern-link no-hover"
                href={email} 
                alt='send an email' 
                target="_blank" 
                aria-label="send an email"
                rel="noopener noreferrer">Send me an email
            </a></p>

          <p><a  className="extern-link no-hover"
                href={twitter} 
                alt="twitter" 
                target="_blank" 
                aria-label="Contact me on twitter"
                rel="noopener noreferrer">Let me a message on twitter
            </a></p>

           <p><a  className="extern-link no-hover" 
                href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="Contact me on linkedin"
                rel="noopener noreferrer">Let me a message on Linkedin
            </a></p>
        </div>

        <Quote quote={quote} />

      </section>
	)
}


export default Getintouch;
