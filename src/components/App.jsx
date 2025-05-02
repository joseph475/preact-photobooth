import { h } from 'preact';
import Router from 'preact-router';

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import GlamBooth from '../pages/GlamBooth';
import Backdrops from '../pages/Backdrops';
import Wedding from '../pages/packages/Wedding';
import Events from '../pages/packages/Events';
import Corporate from '../pages/packages/Corporate';

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
      <Gallery path="/gallery" />
      <GlamBooth path="/360-glam-booth" />
      <Backdrops path="/backdrops" />
      <Wedding path="/packages/wedding" />
      <Events path="/packages/events" />
      <Corporate path="/packages/corporate" />
      {/* Redirect to home if no route matches */}
      <Home default />
    </Router>
  );
};

export default App;
