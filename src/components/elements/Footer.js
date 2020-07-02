import React from 'react';


const Footer = () => {
  
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";
    const codepen = "https://codepen.io/s0ph1/#";

	return (
     <footer>
        <small>
        	<a  href={github} 
                alt="github" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="go to the github account" >Github</a>
        </small>
        <small>
        	<a  href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="go to the linkedin account" >Linkedin</a>
        </small>   
        <small>
        	<a  href={twitter}
                alt="twitter" 
                target="_blank" 
                rel="noopener noreferrer">Twitter</a>
        </small>
         <small>
            <a  href={codepen} 
                alt="codepen" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="go to the codepen account" >Codepen</a>
        </small>   
      </footer>
	)
}


export default Footer;