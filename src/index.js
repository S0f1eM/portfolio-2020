import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = props => {
  return (
    <div className="smApp">
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


