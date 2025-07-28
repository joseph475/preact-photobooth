import { h } from 'preact';
import Footer from '../../components/Footer';
import OurBooths from '../../components/OurBooths';

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/event-booth.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              Unforgettable Event Experiences
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Create lasting memories at your special events with our premium photo booth experiences that engage guests and capture the magic of your celebration.
            </p>
            <a href="#contact" className="inline-block btn-blue btn-hover-effect">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Photo Booth for Special Events
              </h2>
              
              <p className="text-lg mb-8 text-center">
                Think about the last celebration you attended. How was it? Quit thinking so hard because we know it wasn't all that memorable. But don't let that be the case with your next event, whether it be a birthday party, graduation celebration, or special occasion.
              </p>
              
              <p className="text-lg mb-8 text-center">
                Our photo booth rentals are an excellent way of creating a vibrant atmosphere, allowing your event to stand out and act as a fun way of capturing precious moments and creating lasting memories. Plus, they are a pretty cost-effective way of boosting guest engagement and event enjoyment.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
                Special Event Photo Booth Features
              </h3>
              
              {/* First Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Guest Entertainment</h3>
                  <p className="text-gray-700 text-lg">
                    Keep your guests entertained and engaged throughout your event with our interactive photo booth experiences. Our booths provide a fun activity that brings people together and creates shared memories.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    With customizable props, digital filters, and instant printing, your guests will have a blast creating unique photos they can take home as souvenirs from your special event.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/SSSS2.jpg" 
                      alt="Guest Entertainment" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Second Row: Left image, Right description */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-16">
                <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Personalized Experience</h3>
                  <p className="text-gray-700 text-lg">
                    Make your event truly unique with our customizable photo booth options. From themed backdrops and custom overlays to personalized photo templates, we can tailor every aspect of the experience to match your event's theme and style.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Our team works with you to create a cohesive look that complements your event's aesthetic, ensuring a seamless integration with your overall celebration design.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/BDAY SS.jpg" 
                      alt="Personalized Experience" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Third Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Digital Sharing</h3>
                  <p className="text-gray-700 text-lg">
                    Extend the reach of your event beyond the venue with instant digital sharing capabilities. Guests can immediately share their photos on social media platforms, tagging your event and increasing its online presence.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    All digital photos are also collected in an online gallery that you can access after the event, giving you a complete collection of memories from your special day.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/HALLOWEEN 2.jpg" 
                      alt="Digital Sharing" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Examples Section with Parallax */}
        <div 
          className="py-24 bg-fixed bg-center bg-cover relative"
          style="background-image: url('/images/corporate-product-launch.jpg'); min-height: 70vh;"
        >
          <div className="absolute inset-0" style="background-color: rgba(228, 255, 238, 0.7);"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div data-padd-top="20" data-padd-bott="20" className="px-col-content px-middle text-center max-w-4xl" style="padding-top: 20px; padding-bottom: 20px;">
              <div className="px-text">
                <h1 className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold mb-10">Instant Sharing</h1>
              </div>
              <div className="px-hero-wrap" data-delay="" data-animation="">
                <div className="px-hero px-font-m px-font-normal mx-auto" style="color: inherit;">
                  <span className="text-gray-800 text-xl md:text-2xl lg:text-3xl" style="line-height: 1.6;">
                    Besides receiving the printed photos as memorabilia, guests can also share images digitally via our state-of-the-art contactless sharing system. There is no need to tap any buttons or keypads. Simply scan the QR code on the photo booth screen to download the photos or send them via email or sms - all in the blink of an eye!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Booths Section */}
        <OurBooths 
          customHeading="Choose Your Perfect Booth"
          customDescription="We offer a variety of photo booth options to suit any event type, theme, or venue. Select the perfect booth to create unforgettable memories at your special celebration."
        />
        
        {/* Call to Action Section */}
        <div className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to make your event unforgettable?
            </h2>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 btn-hover-effect text-lg">
              BOOK YOUR BOOTH NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
