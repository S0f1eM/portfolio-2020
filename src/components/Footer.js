import React from 'react';

const Footer = () => {
  
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";
    const codepen = "https://codepen.io/s0ph1/#";

	return (
     <footer>
        <small className="mobile">
            <a  href="#header" 
                aria-label="go to top of the page"
                aria-current="page" 
                rel="noopener noreferrer"
                >2020 - Sophie Marchand</a>
        </small>
         <small>
            <a  href="#projects" 
                aria-label="go to the projects"
                aria-current="page" 
                rel="noopener noreferrer">Projects</a>
        </small>
         <small>
            <a  href="/Resume" 
                aria-label="go to Resume"
                rel="noopener noreferrer">Resume</a>
        </small>
        <small>
        	<a  href={github} 
                alt="github" 
                target="_blank" 
                aria-label="go to the github account"
                rel="noopener noreferrer" >Github</a>
        </small>
        <small>
        	<a  href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="go to the linkedin account"
                rel="noopener noreferrer" >Linkedin</a>
        </small>   
        <small>
        	<a  href={twitter}
                alt="twitter" 
                target="_blank" 
                aria-label="go to the twitter account"
                rel="noopener noreferrer" >Twitter</a>
        </small>
         <small>
            <a  href={codepen} 
                alt="codepen" 
                target="_blank" 
                aria-label="go to the codepen account"
                rel="noopener noreferrer" >Codepen</a>
        </small>   
      </footer>
	)
}


export default Footer;