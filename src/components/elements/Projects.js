import React from 'react';
import Card from './Card';

const Works = () => {

	return (
	<>
    <h2 id="#projects">Projects</h2> 
      <section className="main-works">
        
        <Card  
          title="Portfolio 2020" 
          content="This portfolio buid  with react."
          url="https://github.com/S0f1eM/portfolio-2020"
        />
        <Card 
          title="My React Playground" 
          content="Playing with React, redux, axios, API..."
          url="https://sophie-react-playground.surge.sh"
        />
        <Card  
          title="MoodColors template" 
          content="A Template build with react-semantic-ui."
          url="http://moodcolors.surge.sh/"
        />
        <Card  
          title="Full CSS Portfolio" 
          content="Minimalist & full CSS portoflio with Flexbox."
          url="https://flexbox-portfolio.surge.sh"
        />
        <Card 
          title="IUEM WordPress Websites" 
          content="Setting up WordPress sites : integration with Less, PHP, MySQL."
          url="https://www-iuem.univ-brest.fr"
        />
        <Card 
          title="ISBlue WordPress Website" 
          content="Quick setting up of a WordPress website."
          url="https://www.isblue.fr"
        />
        <Card 
          title="WordPress Plugin" 
          content="Building a WordPress directory plugin to manage the directory from WP dashboard (php & MySQL)."
          url="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <Card 
          title="Update Assistant Manager" 
          content="Script bash with wp-cli to update WordPress multisites."
          url="https://github.com/S0f1eM/wordpress-update-manager"
        />
        <Card 
          title="All my repositories..." 
          content="...on Github."
          url="https://github.com/S0f1eM/"
        />
      </section>
    </>
	)
}


export default Works;