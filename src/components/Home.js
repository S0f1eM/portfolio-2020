import React from 'react';

import HomeHeader from './elements/HomeHeader';
import ProjectCard from './elements/ProjectCard';
import Button from './elements/Button';
import Contact from './Contact';

const Home = () => {

	return (
	<>
    <HomeHeader />
    <section className="main-works">
      <h2 id="projects">Some works</h2> 

        <ProjectCard 
          title="IUEM Websites" 
          img="screenshot-iuem.png"
          skills=" HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"
        />
        <ProjectCard  
                title="Semantic UI Template" 
                img="screenshot-MoodColors.png"
                skills=" React - react-semantic-ui"
                url="http://moodcolors.surge.sh/"
                github="https://github.com/S0f1eM/neon-template"
        />
        <ProjectCard  
          title="Minimalist full CSS Portfolio"
          img="flexbox-portfolio.png" 
          skills=" CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
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
                title="Drum Machine" 
                img="screenshot-drum-machine.png"
                content="A drum machine build with React & React-dom on Codepen for the FreeCodeCamp Front-end projects."
                skills=" React - React-dom"
                url="https://codepen.io/s0ph1/full/abNZapq"
        />
        <ProjectCard 
                title="Pictures API Search" 
                img="screenshot-pictures-search.png"
                content="An Images search page made with React, axios to fetch data and Unsplash API. Semantic-ui is also used for design & CSS. "
                skills=" React - Unsplash API - axios "
                github="https://github.com/S0f1eM/pics-search-unsplash"
        />
        <Button  link="/Portfolio" 
              label="go to portfolio" 
              text="SEE MORE WORKS ON MY PORTFOLIO"
              className="see-more" 
        />
      </section>
      <Contact />
    </>
	)
}


export default Home;
