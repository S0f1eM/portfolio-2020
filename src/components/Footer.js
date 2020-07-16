import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTo from './elements/ScrollTo';

const Footer = () => {
  
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";
    const codepen = "https://codepen.io/s0ph1/#";

	return (
     <footer>
        <small className="mobile">
            <a  href="/" 
                aria-label="go to top of the page"
                rel="noopener noreferrer"
                className="neon-purple"
                >2020 - Sophie Marchand</a>
        </small>
         <small>
            <a  href="/#projects" 
                aria-label="go to the projects"
                aria-current="page" 
                className="neon-blue"
                rel="noopener noreferrer">Projects</a>
        </small>
        <ScrollTo>
             <small>
                <Link to="/Resume" 
                    aria-label="go to Resume"
                    className="neon-blue"
                    rel="noopener noreferrer">Resume</Link>
            </small>
        </ScrollTo>
        <small>
        	<a  href={github} 
                alt="github" 
                target="_blank" 
                aria-label="go to the github account"
                className="neon-blue"
                rel="noopener noreferrer" >Github</a>
        </small>
        <small>
        	<a  href={linkedin} 
                alt="linkedin" 
                target="_blank" 
                aria-label="go to the linkedin account"
                className="neon-blue"
                rel="noopener noreferrer" >Linkedin</a>
        </small>   
        <small>
        	<a  href={twitter}
                alt="twitter" 
                target="_blank" 
                aria-label="go to the twitter account"
                className="neon-blue"
                rel="noopener noreferrer" >Twitter</a>
        </small>
         <small>
            <a  href={codepen} 
                alt="codepen" 
                target="_blank" 
                aria-label="go to the codepen account"
                className="neon-blue"
                rel="noopener noreferrer" >Codepen</a>
        </small> 
        <small>
            <a href='https://codepen.io/lvrbrtsn'
            alt="codepen-user"
            target="_blank" 
            aria-label="go to the codepend author account"
            className="little neon-purple"
            rel="noopener noreferrer" >
                Thanks & Credits to Levi Robertson for the neon effects
            </a>
        </small>     
      </footer>
	)
}


export default Footer;