import React from 'react';

import Header from './Header';
import Works from './Works';
import Contact from './Contact';


const Home = () => {

  return (
  	<>
  		<Header home="/" projects="/#projects" about="/About" contact="#contact" />
      	<Works />
      	<Contact />
    </>
  );
}

export default Home;