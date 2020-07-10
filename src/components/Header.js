import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

	return (
    <header className="main-header" id="header">
     	<nav className="navigation">
        <ul className="menu">
        	<li>
            <a href="/" 
                aria-label="top of the page">
                <h1 className="myName">Sophie <span className="mobile">M.</span></h1>
            </a>
          </li>
        	<li>
            <a href="/#projects"
                aria-label="go to projects section" 
                rel="noopener noreferrer">Projects</a>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to Resume section"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact section" 
                aria-current="page"
                rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="About-me">
        <p>I am a french developer who love front-end development. 
        I had worked with various CMS and love coding with Javascript.
        I search for a professionnal project to evolve with great people. <span className="mobile"> Remote job are more than welcomed.</span> 
        Collaborate with a international team would be a thrilling experience for me.</p>
      </div>
    </header>
	)
}


export default Header;