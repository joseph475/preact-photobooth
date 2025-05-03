import { h } from 'preact';
import Router from 'preact-router';
import { useEffect } from 'preact/hooks';

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
import PrivacyPolicy from '../pages/PrivacyPolicy';

const App = () => {
  // Handler for route changes
  const handleRouteChange = () => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  };

  return (
    <Router onChange={handleRouteChange}>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
      <Gallery path="/gallery" />
      <GlamBooth path="/360-glam-booth" />
      <Backdrops path="/backdrops" />
      <Wedding path="/packages/wedding" />
      <Events path="/packages/events" />
      <Corporate path="/packages/corporate" />
      <PrivacyPolicy path="/privacy-policy" />
      {/* Redirect to home if no route matches */}
      <Home default />
    </Router>
  );
};

export default App;
