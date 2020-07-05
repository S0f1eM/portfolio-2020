import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './elements/Home';
import About from './elements/About';
import Footer from './elements/Footer';


const App = () => {

  return (
    <>
    	<BrowserRouter>
	    		<Route path="/" exact component={Home} />
				<Route path="/Home" exact component={Home} />
				<Route path="/About" exact component={About} />
     		<Footer />
        </BrowserRouter>
    </>
  );
}

export default App;