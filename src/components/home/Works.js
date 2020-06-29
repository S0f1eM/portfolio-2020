import React from 'react';
import Card from '../Card';

const Works = () => {

	return (
	<>
    <h2 id="smWorks">Some Works</h2> 
      <section className="main-works">
        
        <Card  
          title="PORTFOLIO 2020" 
          content="This portfolio buid  with react."
          url="https://github.com/S0f1eM/portfolio-2020"
        />
        <Card 
          title="REACT PLAYGROUND" 
          content="Playing with React, redux, axios, API..."
          url="https://sophie-react-playground.surge.sh"
        />
        <Card  
          title="MOODCOLORS" 
          content="A Template build with react-semantic-ui."
          url="http://moodcolors.surge.sh/"
        />
        <Card  
          title="FULL CSS PORTFOLIO" 
          content="Minimalist & full CSS portoflio with Flexbox."
          url="https://flexbox-portfolio.surge.sh"
        />
        <Card 
          title="IUEM WEBSITES" 
          content="Setting up WordPress sites : integration with Less, PHP, MySQL."
          url="https://www-iuem.univ-brest.fr"
        />
        <Card 
          title="WP DIRECTORY PLUGIN" 
          content="Building a WordPress directory plugin to manage the directory from WP dashboard (php & MySQL)."
          url="https://www.umr-amure.fr/annuaire/"
        />
        <Card 
          title="UPDATE ASSISTANT MANAGER" 
          content="Script bash with wp-cli to update WordPress multisites."
          url="https://github.com/S0f1eM/wordpress-update-manager"
        />
        <Card 
          title="ALL MY REPOSITORIES..." 
          content="...on Github."
          url="https://github.com/S0f1eM/"
        />
      </section>
    </>
	)
}


export default Works;