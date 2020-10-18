import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';


const Navigation = () => {

	return (     	
      <nav className="navigation">
        
        <ul className="menu top-nav">

          <li className="left-nav">
            <Link to="/"  
                    aria-label="go to home page"
                    data-menuanchor="home page"
                    className="logo no-hover"
                    role="navigation">
                  <h1>Sophie M.</h1>
                  <p className="main-subtitle">Front-End Developer</p>
            </Link>
          </li>
          <li className="toggle-mode">
            <DarkModeToggle />
          </li>
        </ul>

          <ul className="menu right-nav">
            <li>
              <Link to="/"  
                  className="projects-links"
                  aria-label="go to home page"
                  data-menuanchor="home page"
                  role="navigation">HOMEPAGE
              </Link>
            </li>
            <li>
              <Link to="/Resources"  
                      aria-label="go to resources page"
                      data-menuanchor="resources page"
                      className="source-title"
                      rel="noopener noreferrer"
                      role="navigation">RESOURCES
              </Link>
          </li>
          <li>
              <Link to="/Getintouch" 
                  className="contact-links"
                  aria-label="go to the contact page" 
                  data-menuanchor="contact"
                  rel="noopener noreferrer"
                  role="navigation">CONTACT</Link>
          </li>
        </ul>
      </nav>    
	)
}


export default Navigation;
