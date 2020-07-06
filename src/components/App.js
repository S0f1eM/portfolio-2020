import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './elements/Header';
import Home from './elements/Home';
import Resume from './elements/Resume';
import Footer from './elements/Footer';


const App = () => {

  return (
    <>
    	<BrowserRouter>
        <Header />
	    		<Route path="/" exact component={Home} />
				  <Route path="/Home" exact component={Home} />
				  <Route path="/Resume" exact component={Resume} />
     		<Footer />
      </BrowserRouter>
    </>
  );
}

export default App;