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
                <h1 className="wrap myName fade neon-blue">
                  Sophie <span className="mobile neon-purple">M.</span>
                </h1>
            </a>
          </li>
        	<li>
            <a href="/#projects"
                aria-label="go to projects section" 
                className="wrap neon-blue"
                rel="noopen:nth-child(5)er noreferrer">Works</a>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to Resume section"
                  className="wrap trav neon-purple"
                  rel="noopener noreferrer">Resume
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact section" 
                aria-current="page"
                className="wrap neon-blue"
                rel="noopener noreferrer">Contact</a>
                <span className="only-dark-mode neon-purple fade">Me</span>
          </li>
          <li>
          <DarkModeToggle />
          </li>
        </ul>
      </nav>
      <div className="About-me">
        <p>Hi, I'm Sophie! I'm a french developer who love <b>Frontend oriented development</b>, working with <b>Javascript</b> and doing stuff with Reactjs. I have also full-stack developer experiences with various <b>CMS</b> and <b>project management. I'm searching for a full remote job to collaborate with an international team to grow with passionates people.</b></p>
      </div>
    </header>
	)
}


export default Header;
