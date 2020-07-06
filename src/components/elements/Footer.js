import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";
    const codepen = "https://codepen.io/s0ph1/#";

	return (
     <footer>
        <small>
            <Link to="#header" 
                aria-label="go to top of the page"
                aria-current="page" 
                rel="noopener noreferrer">2020 - Sophie <span className="mobile">Marchand</span></Link>
        </small>
        <small>
        	<Link to={github} 
                alt="github" 
                target="_blank" 
                aria-label="go to the github account"
                rel="noopener noreferrer" >Github</Link>
        </small>
        <small>
        	<Link to={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="go to the linkedin account"
                rel="noopener noreferrer" >Linkedin</Link>
        </small>   
        <small>
        	<Link to={twitter}
                alt="twitter" 
                target="_blank" 
                aria-label="go to the twitter account"
                rel="noopener noreferrer" >Twitter</Link>
        </small>
         <small>
            <Link to={codepen} 
                alt="codepen" 
                target="_blank" 
                aria-label="go to the codepen account"
                rel="noopener noreferrer" >Codepen</Link>
        </small>   
      </footer>
	)
}


export default Footer;