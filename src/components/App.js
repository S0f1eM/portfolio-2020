import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './elements/Header';
import Projects from './elements/Projects';
import Resume from './elements/Resume';
import Contact from './elements/Contact';
import Footer from './elements/Footer';


const App = () => {

  return (
    <>
    	<BrowserRouter>
      <Header />
	    	<Route path="/" exact component={Projects} />
				<Route path="/Home" exact component={Projects} />
				<Route path="/Resume" exact component={Resume} />
      <Contact />
     	<Footer />
      </BrowserRouter>
    </>
  );
}

export default App;