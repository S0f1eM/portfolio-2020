import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollTo from './action/ScrollTo';

import Navigation from './elements/Navigation';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Getintouch from './Getintouch';
import Resources from './Resources';
import Footer from './elements/Footer';

const App = () => {

  return (
    <>
    	<BrowserRouter>
        <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
    				<Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <ScrollTo> 
              <Route path="/Portfolio" exact component={Portfolio} />
      				<Route path="/About" exact component={About} />
              <Route path="/Getintouch" exact component={Getintouch} />
              <Route path="/Resources" exact component={Resources} />
            </ScrollTo> 
          </Suspense>
       	<Footer />
      </BrowserRouter>
    </>
  );
}

export default App;