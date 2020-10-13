import React from 'react';

import HomeHeader from './elements/HomeHeader';
import ProjectCard from './elements/ProjectCard';
import Button from './elements/Button';

const Home = () => {

  const content = "Hello, I'm Sophie. I'm a developer who like Frontend development. I have professional experiences in full stack development, working with CMS like WordPress and in project management. I also like to use and experiment React on my spare time."

  return (
	<>
    <HomeHeader content={content}/>

    <main className="main-works">
      <h2 id="projects" tabindex="0" >Some works</h2> 

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
        <aside>
          <Button link="/Portfolio" 
                  label="go to portfolio" 
                  text="SEE MORE WORKS"
          />
        </aside>
      </main>
    </>
	)
}


export default Home;
