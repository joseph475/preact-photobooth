import { h } from 'preact';
import Router from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import AudioPlayer from './AudioPlayer';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import JackSpot from '../pages/JackSpot';
import RetroJack from '../pages/RetroJack';
import JackSpin from '../pages/JackSpin';
import Backdrops from '../pages/Backdrops';
import Wedding from '../pages/packages/Wedding';
import Events from '../pages/packages/Events';
import Corporate from '../pages/packages/Corporate';
import Graduation from '../pages/packages/Graduation';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const App = () => {
  // State to track if ScrollToTop button is visible
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  
  // Handler for route changes
  const handleRouteChange = () => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AudioPlayer isScrollToTopVisible={isScrollToTopVisible} />
      <ScrollToTop onVisibilityChange={setIsScrollToTopVisible} />
      <Navigation />
      <main className="flex-grow">
        <Router onChange={handleRouteChange}>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <Gallery path="/gallery" />
          <JackSpot path="/jackspot" />
          <RetroJack path="/retrojack" />
          <JackSpin path="/jackspin" />
          <Backdrops path="/backdrops" />
          <Wedding path="/packages/wedding" />
          <Events path="/packages/events" />
          <Corporate path="/packages/corporate" />
          <Graduation path="/packages/graduation" />
          <PrivacyPolicy path="/privacy-policy" />
          {/* Redirect to home if no route matches */}
          <Home default />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
