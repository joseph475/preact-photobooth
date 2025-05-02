import { h } from 'preact';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import BackdropGallery from '../components/BackdropGallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        <ServiceSection 
          title="PHOTO BOOTH FOR WEDDINGS"
          description="Capture the timeless moments of your special day with our exquisite Wedding Photo Booth services. Our state-of-the-art photo booth is designed to add a touch of elegance and fun to your wedding festivities. With professional equipment and high-quality prints that perfectly reflect your wedding theme, our service ensures an unforgettable experience for you and your guests."
          imageUrl="/images/10.jpg"
          buttonText="VIEW WEDDING PACKAGES"
          buttonLink="/packages/wedding"
        />
        
        <ServiceSection 
          title="PHOTO BOOTH FOR EVENTS"
          description="Elevate the glamour and excitement of your high-profile events such as galas, awards ceremonies, and prestigious gatherings with our cutting-edge Photo Booth services. Our sophisticated Photo Booth is designed to seamlessly blend into the opulence of your grand event, providing a unique and entertaining experience for your esteemed guests."
          imageUrl="/images/7.jpg"
          buttonText="VIEW EVENT PACKAGES"
          buttonLink="/packages/events"
          isReversed={true}
        />
        
        <ServiceSection 
          title="PHOTO BOOTH FOR CORPORATE EVENTS"
          description="Are you seeking innovative ways in which you can use a photo booth as a marketing tool? A photo booth is a great way to engage with your customers and create a unique guest book experience for your corporate events."
          buttonText="VIEW CORPORATE PACKAGES"
          imageUrl="/images/8.jpg"
          buttonLink="/packages/corporate"
        />
        
        <ServiceSection 
          title="360° GLAM VIDEO BOOTH EXPERIENCE"
          description="Take a spin on our 360° video booth and experience the hype! It's FUN! It's LIT! It's MEMORABLE! Great for personal or company event rentals."
          buttonText="VIEW 360° GLAM VIDEO BOOTH EXPERIENCE"
          buttonLink="/360-glam-booth"
          imageUrl="/images/11.jpg"
          isReversed={true}
        />
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
