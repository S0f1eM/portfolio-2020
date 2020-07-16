import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  return (
    <>
    	<BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>} >
	    	<Route path="/" exact component={Projects} />
				<Route path="/Home" exact component={Projects} />
				<Route path="/Resume" exact component={Resume} />
      </Suspense>
      <Contact />
     	<Footer />
      </BrowserRouter>
    </>
  );
}

export default App;