import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './elements/DarkModeToggle';

const Header = () => {

	return (
    <header className="main-header" id="header">
     	<nav className="navigation">
        <ul className="menu">
        	<li>
            <a href="/" 
                aria-label="top of the page">
                <h1 className="myName fade neon-blue">Sophie <span className="mobile neon-purple">M.</span></h1>
            </a>
          </li>
        	<li>
            <a href="/#projects"
                aria-label="go to projects section" 
                className="neon-blue"
                rel="noopener noreferrer">Projects</a>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to Resume section"
                  className="trav neon-purple"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact section" 
                aria-current="page"
                className="neon-blue"
                rel="noopener noreferrer">Contact</a>
                <span className="only-dark-mode neon-purple fade">Me</span>
          </li>
          <li>
          <DarkModeToggle />
          </li>
        </ul>
      </nav>
      <div className="About-me">
        <p>I'm a french developer who love <b>Front-End developement</b> and <b>Javascript</b>. I had experiences with <b>HTML/CSS/JS</b> and <b>CMS</b> (WordPress, Plone, Prestashop, Jalios).
        I search for a remote job to collaborate with an international team to grow with passionates people.</p>
      </div>
    </header>
	)
}


export default Header;