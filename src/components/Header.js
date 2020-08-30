import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './elements/DarkModeToggle';


const Header = () => {

	return (
    <header className="main-header" id="header">
     	<nav className="navigation">
        <ul className="menu">
        	<li>
            <a href="/" aria-label="top of the page">
                <h1 className="wrap myName">
                  Sophie <span className="mobile neon-purple">M.</span>
                </h1>
            </a>
          </li>
        	<li>
            <a href="/#projects"
                aria-label="go to projects section" 
                className="wrap"
                rel="noopen:nth-child(5)er noreferrer">Works</a>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to Resume section"
                  className="wrap"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact section" 
                aria-current="page"
                className="wrap"
                rel="noopener noreferrer">Contact</a>
          </li>
          <li>
          <DarkModeToggle />
          </li>
        </ul>
      </nav>
      <div className="About-me">
        <p>Hello, I'm Sophie. I'm a creative developer who love <b>Frontend development</b>. I have experiences with <b>full stack development</b> and <b>CMS</b> like <b>WordPress</b>. My experience in project management for a redesign has been the opportunity to participate in all the creative process: from the writing of the specifications to the delivery in production.</p>
      </div>
    </header>
	)
}


export default Header;
