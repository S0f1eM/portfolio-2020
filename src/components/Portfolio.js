import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {

	return (
		<>
			<section className="portfolio" id="portfolio">
				<h2>Portfolio</h2>
				    <div className="pattern small"></div>
				    <p className="section-intro">Here are some works I made. Some are profesional works and others personal project I made on my free time. I mostly use JavaScript for those project and React. I love playing and training with CSS possibilities also and work on upgrading my design knowledge.</p>
				   	<div className="pattern small"></div>
				<div className="portfolio-list">
					<ProjectCard  
			          title="Personal website 2020" 
			          img="darkmode-portfolio.png"
			          content="A personal website with a darkmode effect to show show portfolio and resume. Build with React and deployed with Netlify."
			          skills=" React - CSS - Netlify"
			          url="/"
			          github="https://github.com/S0f1eM/portfolio-2020"
			        />
			        <ProjectCard 
			          title="Pictures API Search" 
			          img="screenshot-pictures-search.png"
			          content="An Images search page made with React, axios to fetch data and Unsplash API. Semantic-ui is also used for design & CSS. "
			          skills=" React - Unsplash API - axios "
			          github="https://github.com/S0f1eM/pics-search-unsplash"
			        />
			        <ProjectCard 
			          title="Drum Machine" 
			          img="screenshot-drum-machine.png"
			          content="A drum machine build with React & React-dom on Codepen for the FreeCodeCamp Front-end projects."
			          skills=" React - React-dom"
			          url="https://cdpn.io/s0ph1/debug/abNZapq/ZoABazbvQVGr"
			        />
			        <ProjectCard 
			          title="Pomodoro" 
			          img="screenshot-pomodoro.png"
			          content="A Pomodoro build with React & Moment.js on Codepen for the FreeCodeCamp Front-end projects."
			          skills=" React - moment.js "
			          url="https://cdpn.io/s0ph1/debug/mdPrWKZ/XBAGRqDPnjDr"
			        />
			        <ProjectCard  
			          title="Semantic UI Template" 
			          img="screenshot-MoodColors.png"
			          content="A Template for a blog or a showcase website made with React & react-semantic-ui to see how it works."
			          skills=" React - react-semantic-ui"
			          url="http://moodcolors.surge.sh/"
			          github="https://github.com/S0f1eM/neon-template"
			        />
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
			          title="Minimalist full CSS Portfolio"
			          img="flexbox-portfolio.png" 
			          content="A developer portfolio made from scratch with Flexbox & only CSS. It was a personal no JS challenge for my 2019 portfolio."
			          skills=" CSS3 - Flexbox - HTLM5 "
			          url="https://flexbox-portfolio.surge.sh"
			          github="https://github.com/S0f1eM/portfolio-full-css"
			        />
			        <ProjectCard 
			          title="Bootstrap Portfolio" 
			          img="bootstrap-portfolio.png"
			          content="A responsive portfolio made from scratch with bootstrap at the end of my developer certification in 2016."
			          skills=" HTML5 - CSS3 - jQuery - Bootstrap"
			          url="https://bootstrap-portfolio.surge.sh "
			          github="https://github.com/S0f1eM/Bootstrap-portfolio"
			        />			 
				</div>
			</section>
		</>
	)
}


export default Portfolio;