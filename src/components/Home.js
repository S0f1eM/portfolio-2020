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
          skills=" WORDPRESS - PHP - MySQL"
          content="A university institute and 3 laboratories partners websites."
          url="https://www-iuem.univ-brest.fr"
        />
        <ProjectCard 
                title="Directory WP Plugin" 
                skills=" PHP - MySQL - WORDPRESS"
                content="A WordPress directory manager plugin to manage a directory."                
                url="https://www-iuem.univ-brest.fr/annuaire/"
                github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <ProjectCard 
                title="Drum Machine" 
                skills=" React - React-dom"
                content="A drum machine build with React & React-dom on Codepen."
                url="https://codepen.io/s0ph1/full/abNZapq"
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
