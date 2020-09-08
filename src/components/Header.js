import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './elements/DarkModeToggle';


const Header = () => {

	return (
    <header className="main-header" id="header">
     	
      <nav className="navigation">
        <ul className="menu">
        	<li>
            <a className="logo" href="/" aria-label="go to home page">
                <h1>Sophie M.</h1>
            </a>
          </li>
        	<li>
            <Link to="/Portfolio"  
                aria-label="go to portfolio" 
                rel="noopener noreferrer">PORTFOLIO
            </Link>
          </li>
        	<li>
            <Link to="/Resume"  
                  aria-label="go to about page"
                  rel="noopener noreferrer">ABOUT
           </Link>
          </li>
        	<li>
             <a href="/#contact"
                aria-label="go to the contact section" 
                aria-current="page"
                rel="noopener noreferrer">CONTACT</a>
          </li>
          <li>
          <DarkModeToggle />
          </li>
        </ul>
      </nav>      
    </header>
	)
}


export default Header;
