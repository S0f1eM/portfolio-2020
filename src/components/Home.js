import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';


const Home = () => {

	return (
	<>
    <section className="main-works">
      <h2 id="projects">Some works</h2> 
        <ProjectCard 
          title="IUEM Websites" 
          img="screenshot-iuem.png"
          content="A university institute  and 3 laboratories partners websites with WordPress : Lemar, Geosciences Ocean and Amure."
          skills=" HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"
        />
        <ProjectCard 
          title="Directory Manager WP Plugin" 
          img="plugin-directory.png"
          content="A WordPress directory plugin to manage a researchers directory (php & MySQL) and show employee's data."
          skills=" PHP - MySQL - JavaScript"
          url="https://www-iuem.univ-brest.fr/annuaire/"
          github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <ProjectCard 
          title="Pictures API Search" 
          img="screenshot-pictures-search.png"
          content="An Images search page made with React, axios to fetch data and Unsplash API. Semantic-ui is also used for design & CSS. "
          skills=" React - Unsplash API - axios "
          github="https://github.com/S0f1eM/pics-search-unsplash"
        />
        <ProjectCard  
          title="Minimalist full CSS Portfolio"
          img="flexbox-portfolio.png" 
          content="A developer portfolio made from scratch with Flexbox & only CSS. It was a personal no JS challenge for my 2019 portfolio."
          skills=" CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
        />

        <div className="see-more-block">
              <Link to="/Portfolio"  
                   aria-label="go to portfolio" 
                   className="see-more"
                   rel="noopener noreferrer">SEE MORE WORKS ON MY PORTFOLIO</Link>
        </div>
      </section>
    </>
	)
}


export default Home;
