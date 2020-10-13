import React from 'react';
import ProjectCard from './elements/ProjectCard';
import Button from './elements/Button';

const Portfolio = () => {

	return (
		<>
			<section className="portfolio" id="portfolio" role="main">

			<h2 className="xp-and-skills" id="about" tabindex="0">Projects</h2>
								
				<div className="portfolio-list">
				    <ProjectCard 
			          title="Drum Machine" 
			          img="screenshot-drum-machine.png"
			          content="A drum machine build with React & React-dom on Codepen."
			          skills=" React - React-dom"
			          url="https://codepen.io/s0ph1/full/abNZapq"
			        />
			          <ProjectCard 
			          title="IUEM Websites" 
			          img="screenshot-iuem.png"
			          content="A university institute and 3 laboratories partners websites."
			          skills=" WORDPRESS - PHP - MySQL"
			          url="https://www-iuem.univ-brest.fr"
			        />
			        <ProjectCard 
			          title="Directory Plugin" 
			          img="screenshot-plugin.png"
			          content="A WordPress directory plugin to manage and show the directory on the website."
			          skills=" PHP - MySQL - JavaScript"
			          url="https://www-iuem.univ-brest.fr/annuaire/"
			          github="https://github.com/S0f1eM/my-first-wp-plugin"
			        />
			        <ProjectCard  
			          title="Full CSS Portfolio"
			          img="screenshot-flexbox.png" 
			          content="A developer portfolio made from scratch with Flexbox and no JavaScript. "
			          skills=" CSS3 - Flexbox - HTLM5"
			          url="https://flexbox-portfolio.surge.sh"
			          github="https://github.com/S0f1eM/portfolio-full-css"
			        />
			        <ProjectCard  
			          title="Semantic UI Template" 
			          img="screenshot-neon.png"
			          content="A Blog template made with Reactjs using the react-semantic-ui integration."
			          skills=" React - react-semantic-ui"
			          url="http://moodcolors.surge.sh/"
			          github="https://github.com/S0f1eM/neon-template"
			        />
			         <ProjectCard 
			          title="Pictures API Search" 
			          img="screenshot-pictures-search.png"
			          content="CODE ONLY - An Images search page made with React and axios to fetch data."
			          skills=" React - Unsplash API - axios "
			          github="https://github.com/S0f1eM/pics-search-unsplash"
			        />	 
				</div>
				<Button  link="/About" 
              			 label="go to about page" 
              		     text="VIEW MY RESUME"
              			 className="see-more" 
                />
			</section>
		</>
	)
}


export default Portfolio;