import { h } from 'preact';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-400 py-20 overflow-hidden">
        {/* Decorative Elements - Corporate Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
            <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
          </svg>
        </div>
        
        {/* Existing Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-1/4 text-white opacity-20 text-9xl font-elegant">brand</div>
          <div className="absolute bottom-0 right-1/4 text-white opacity-20 text-8xl font-modern">impact</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">Photo Booth For Corporate Event</span>
            <span className="absolute -top-2 -right-2 text-teal-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">•</span>
          </h1>
          
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-6">
            Elevate your corporate events with our professional photo booth experiences
          </p>
          
          {/* Decorative line below description */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-elegant text-blue-600 mb-6">
                Enhance Your Corporate Events with Interactive Experiences
              </h2>
              
              <p className="text-lg mb-8">
                Our corporate photo booth solutions are designed to add a professional and engaging element to your 
                business events. From trade shows and conferences to team building activities and holiday parties, 
                our photo booths create memorable experiences while reinforcing your brand identity.
              </p>
              
              <div className="flex justify-center mb-12 relative">
                <div className="rounded-lg shadow-xl w-full max-w-2xl transform -rotate-1 overflow-hidden">
                  <img 
                    src="/images/8.jpg" 
                    alt="Corporate Photo Booth" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 text-blue-600 text-5xl font-stylish transform rotate-6">
                  engage
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Unique Branding Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-700 mb-8 font-modern">
              Unique Branding
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                We can make your brand standout! From our customized screens to our color changing LED lights, we can make 
                your event unique to your brand. Contact us to learn more!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Branded Photo Booth</h3>
                  <p className="text-gray-700">
                    Set up a photo booth with your brand's logo and colors as the backdrop. This creates a memorable visual 
                    association between your brand and the event.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Custom Templates</h3>
                  <p className="text-gray-700">
                    Personalized photo templates featuring your company logo, event theme, and corporate colors for a cohesive brand experience.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">LED Lighting</h3>
                  <p className="text-gray-700">
                    Color-changing LED lights that match your brand colors to create an immersive and on-brand environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Strategic Marketing Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-700 mb-8 font-modern">
              Strategic Marketing
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                Using a photo booth in your strategic marketing efforts can be a fun and effective way to engage with 
                your target audience and promote your brand. Here are some ideas to get you started:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Social Media Integration</h3>
                  <p className="text-gray-700">
                    Use social media to promote the photo booth experience and encourage people to share their photos with a 
                    branded hashtag. This will help to increase your brand's visibility and engagement on social media platforms.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">User-Generated Content</h3>
                  <p className="text-gray-700">
                    Encourage people to take photos with your branded photo booth and share them on their social media profiles. 
                    You can then feature the best photos on your own social media pages or website.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Event Marketing</h3>
                  <p className="text-gray-700">
                    Incorporate your branded photo booth into your event marketing efforts. For example, you can offer a photo 
                    booth experience at a trade show or conference to attract visitors to your booth.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Data Collection</h3>
                  <p className="text-gray-700">
                    Use the photo booth as a tool to collect data from participants, such as their email address or social media handles, 
                    which can be used for future marketing campaigns or to stay in touch with them.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-4">
                Overall, using a photo booth in your strategic marketing efforts can be a fun and engaging way 
                to promote your brand and attract attention to your events.
              </p>
            </div>
          </div>
        </div>
        
        
        {/* Call to Action Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-700 mb-8 font-modern">
              Call to Action
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8 text-center">
                When using a photo booth in your marketing efforts, it's important to include a clear call-to-action to 
                encourage participants to take action after using the booth. Here are some ideas for call-to-action 
                messages we can use for your event with our photo booth:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Follow Us on Social Media</h3>
                  <p className="text-gray-700">
                    Encourage people to follow your brand's social media profiles by including your handles in the photo booth 
                    backdrop or printouts.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Sign Up for Our Newsletter</h3>
                  <p className="text-gray-700">
                    Use the photo booth to collect email addresses for your newsletter campaigns. You can include a sign-up form or 
                    QR code on the photo printouts or backdrop.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Visit Our Website</h3>
                  <p className="text-gray-700">
                    Direct people to your website by including a call-to-action message on the photo printouts. You can also include a 
                    URL or QR code for easy access.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Share Your Photo</h3>
                  <p className="text-gray-700">
                    Encourage people to share their photo booth pictures on social media using a branded hashtag. This will help to 
                    increase your brand's visibility and engagement on social media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Companies We've Worked With */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-700 mb-12 font-modern">
              Who We've Worked With
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto opacity-70">
              {/* This would typically contain client logos */}
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 1</span>
              </div>
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 2</span>
              </div>
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 3</span>
              </div>
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 4</span>
              </div>
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 5</span>
              </div>
              <div className="flex items-center justify-center h-16 bg-white rounded shadow-sm">
                <span className="text-gray-500 font-semibold">Client 6</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Call to Action Section */}
        <div className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-stylish mb-6">
              Ready to elevate your corporate event?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our photo booth solutions can enhance your next corporate event and help achieve your marketing goals.
            </p>
            <a href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-stylish py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Contact Us Now
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Corporate;
