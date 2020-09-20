import React from 'react';

import HomeHeader from './elements/HomeHeader';
import ProjectCard from './elements/ProjectCard';
import Button from './elements/Button';
import Quote from './elements/Quote';

const Home = () => {

  const quote = `"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. 
  Respect is a choice.`;
  const author ='Whatever choice you make makes you. Choose Wisely." Roy T. Bennet';

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
          title="Full CSS Portfolio"
          img="flexbox-portfolio.png" 
          skills=" CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
        />
        <ProjectCard 
                title="Directory WP Plugin" 
                img="plugin-directory.png"
                skills=" PHP - MySQL - JavaScript"
                url="https://www-iuem.univ-brest.fr/annuaire/"
                github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <ProjectCard 
                title="Drum Machine" 
                img="screenshot-drum-machine.png"
                skills=" React - React-dom"
                url="https://codepen.io/s0ph1/full/abNZapq"
        />
        <ProjectCard 
                title="Pictures API Search" 
                img="screenshot-pictures-search.png"
                skills=" React - Unsplash API - axios "
                github="https://github.com/S0f1eM/pics-search-unsplash"
        />
        <Button  link="/Portfolio" 
              label="go to portfolio" 
              text="SEE MORE WORKS"
              className="see-more" 
        />
      </section>
      <Quote quote={quote} more={author}/>
    </>
	)
}


export default Home;
