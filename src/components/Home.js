import React from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from './elements/ProjectCard';
import Source from './elements/Source';


const Home = () => {

  const github = "https://github.com/S0f1eM";

  return (
	<>
    <header className="main-header">
        <div className="about-me">
          <p tabIndex="0">Hello, I'm Sophie. I'm a french based developer with experiences with JavaScript, React, CMS or project management. I like to use React, experiment new tech things and I share resources I found useful while I 
          wander on the web.</p>
        </div>
    </header>

    <main className="main-works">

      <h2 className="main-title" tabIndex="0">WORKS & SIDE-PROJECTS</h2> 

      <a  href={github} alt="github" target="_blank" 
          aria-label="go to the github account"
          rel="noopener noreferrer"
          className="projects-links to-the-site">See more Creations</a>

      <div className="portfolio-list">
                <ProjectCard 
                  title="Images & Pictures Search Place" 
                  content="An Images search page made with React and axios to fetch Unsplash data via their API."
                  skills="{ React - Unsplash API - axios }"
                  github="https://github.com/S0f1eM/pics-search-unsplash"
                />  
                <ProjectCard  
                  title="Semantic Neon Template" 
                  content="A Blog template I made with Reactjs using the react-semantic-ui integration and shorthand Props."
                  skills="{ React - react-semantic-ui }"
                  url="http://moodcolors.surge.sh/"
                  github="https://github.com/S0f1eM/neon-template"
                />
                <ProjectCard 
                  title="Institute project management & development" 
                  content="An european institute and 3 laboratories partners websites rebuild project I manage and build."
                  skills="{ WORDPRESS - PHP - MySQL }"
                  url="https://www-iuem.univ-brest.fr"
                />
                <ProjectCard 
                  title="Wordpress directory manager plugin" 
                  content="A WordPress directory plugin to manage and show the directory on the IUEM websites I build."
                  skills="{ PHP - MySQL - JavaScript }"
                  url="https://www-iuem.univ-brest.fr/annuaire/"
                  github="https://github.com/S0f1eM/my-first-wp-plugin"
                />
                <ProjectCard  
                  title="Flexbox Portfolio"
                  content="A developer portfolio made from scratch with Flexbox and no JavaScript. "
                  skills="{ Flexbox - HTLM5 }"
                  url="https://flexbox-portfolio.surge.sh"
                  github="https://github.com/S0f1eM/portfolio-full-css"
                />
                <ProjectCard 
                  title="Drum Machine project" 
                  content="A drum machine build with React & React-dom on Codepen."
                  skills="{ React - React-dom }"
                  url="https://codepen.io/s0ph1/full/abNZapq"
                /> 
          </div>

        </main>

      <aside>

      <h2 className="main-title" tabIndex="0">LAST DISCOVERIES</h2> 

      <Link className="to-the-page"
            to="/Resources" 
            aria-label="go to resources page" 
            rel="noopener noreferrer" role="navigation">Discover more resources</Link>


        <div className="resources-list">

          <Source title="Accessibility & Me"
                  url="https://a11y.me/"
                  intro="A good collection of resources to start on web accessibility."
          />
          <Source title="7 Practical Tips for Cheating at Design"
                  url="https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886"
                  intro="Improving your designs with tactics instead of talent."
          />
          <Source title="21 Performance Optimization Techniques for React Apps"
                  url="https://www.codementor.io/blog/react-optimization-5wiwjnf9hj"
                  intro="Optimize your React application's performance with these 21 techniques. " 
          />
          <Source title="Be Like Water"
                  url="https://www.brainpickings.org/2013/05/29/like-water-bruce-lee-artist-of-life/"
                  intro="The Philosophy and Origin of Bruce Lee’s Famous Metaphor for Resilience."
          />

        </div>

        <Link to="/Resources" 
              aria-label="go to resources page" 
              rel="noopener noreferrer" role="navigation">More...</Link>


      </aside>
    </>
	)
}


export default Home;
