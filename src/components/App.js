import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  return (
    <>
    	<BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
				<Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Portfolio" exact component={Portfolio} />
				<Route path="/Resume" exact component={Resume} />
      </Suspense>
      <Contact />
     	<Footer />
      </BrowserRouter>
    </>
  );
}

export default App;