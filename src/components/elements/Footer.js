import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
    const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";
    const codepen = "https://codepen.io/s0ph1/#";

	return (
        <footer>
            <section className="footer-links">
                
                <div className="left-footer mobile">
                     <small>
                        <Link to="/" 
                              aria-label="go to Home page" 
                              rel="noopener noreferrer">Home</Link>
                    </small>
                    <small>
                         <Link to="/Portfolio" 
                               aria-label="go to portfolio" 
                               rel="noopener noreferrer">Portfolio</Link>
                    </small>
                    <small>
                        <Link to="/About" 
                              aria-label="go to about page" 
                              rel="noopener noreferrer">About</Link>
                    </small>
                    <small>
                        <Link to="/Getintouch" 
                              aria-label="go to contact page" 
                              rel="noopener noreferrer">Contact</Link>
                    </small>
                </div>
                
                <div className="right-footer">
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
                            rel="noopener noreferrer nofollow">Twitter</a>
                    </small>
                     <small>
                        <a  href={codepen} 
                            alt="codepen" 
                            target="_blank" 
                            aria-label="go to the codepen account"
                            rel="noopener noreferrer" >Codepen</a>
                    </small>
                </div>
            </section>
             <div className="copyright">
                <small className="lightgrey">2020 - Sophie Marchand. 
                <span className="mobile"> Time is not refundable. Use it with intention. Thank you for yours.</span>
                </small>  
            </div>
        </footer>

	)
}


export default Footer;