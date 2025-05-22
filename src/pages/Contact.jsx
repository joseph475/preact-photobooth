import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  // State to track which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  useEffect(() => {
    // Check if Leaflet is available
    if (typeof window !== 'undefined' && typeof window.L !== 'undefined') {
      // Initialize the map
      const map = window.L.map('map').setView([45.2733, -66.0633], 13); // Saint John, NB coordinates
      
      // Add OpenStreetMap tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add a marker for the business location
      const marker = window.L.marker([45.2733, -66.0633]).addTo(map);
      marker.bindPopup("<b>JACK Photobooth</b><br>East Side, Saint John, NB").openPopup();
      
      // Clean up on unmount
      return () => {
        map.remove();
      };
    } else {
      // Load Leaflet dynamically if not available
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
      script.integrity = 'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==';
      script.crossOrigin = '';
      script.onload = () => {
        // Initialize map after Leaflet is loaded
        const map = window.L.map('map').setView([45.2733, -66.0633], 13);
        
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        const marker = window.L.marker([45.2733, -66.0633]).addTo(map);
        marker.bindPopup("<b>JACK Photobooth</b><br>East Side, Saint John, NB").openPopup();
      };
      
      // Add Leaflet CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
      link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
      link.crossOrigin = '';
      
      document.head.appendChild(link);
      document.body.appendChild(script);
    }
  }, []);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventTime: '',
    eventDate: '',
    venueStreet: '',
    city: '',
    province: '',
    postalCode: '',
    guests: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Sending your message...'
    });

    // Create form data to send via fetch
    const formDataToSend = new FormData();
    formDataToSend.append('to_email', 'info@jackphotobooth.ca');
    formDataToSend.append('from_name', `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append('from_email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('subject', 'New Photo Booth Booking Request');
    
    // Format message content
    const messageContent = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Event Details:
- Date: ${formData.eventDate || 'Not specified'}
- Time: ${formData.eventTime || 'Not specified'}
- Estimated Guests: ${formData.guests || 'Not specified'}
- Service: ${formData.service || 'Not specified'}

Venue Address:
${formData.venueStreet || 'Not specified'}
${formData.city || 'Not specified'}, ${formData.province || 'Not specified'} ${formData.postalCode || 'Not specified'}

Message:
${formData.message}
    `;
    
    formDataToSend.append('message', messageContent);
    
    // Use a free email sending service (formsubmit.co)
    fetch(`https://formsubmit.co/ajax/info@jackphotobooth.ca`, {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => response.json())
    .then(data => {
      console.log('SUCCESS!', data);
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventTime: '',
        eventDate: '',
        venueStreet: '',
        city: '',
        province: '',
        postalCode: '',
        guests: '',
        service: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('FAILED...', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again later.'
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-purple-600 py-20 overflow-hidden">
        {/* Decorative Elements - Contact Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </div>
        
        {/* Existing Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-1/4 text-white opacity-20 text-9xl font-elegant">connect</div>
          <div className="absolute bottom-0 right-1/4 text-white opacity-20 text-8xl font-modern">reach out</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute -top-2 -right-2 text-purple-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">•</span>
          </h1>
          
          <p className="text-white text-lg max-w-2xl mx-auto mb-6">
            Have questions or ready to book your photo booth experience? 
            We're here to help make your event unforgettable!
          </p>
          
          {/* Decorative line below description */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Contact Information Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact Information */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl text-blue-500 mb-8 font-modern">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">East Side, Saint John, NB, Canada, New Brunswick</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+1 236-234-1229</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@jackphotobooth.ca</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-5 text-blue-600">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-all hover:scale-110 transform duration-300 shadow-md border-2 border-blue-300">
                      <img src="/images/social/facebook.svg" alt="Facebook" className="h-8 w-8 filter brightness-0 invert" />
                    </a>
                    <a href="#" className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110 transform duration-300 shadow-md border-2 border-pink-300">
                      <img src="/images/social/instagram.svg" alt="Instagram" className="h-8 w-8 filter brightness-0 invert" />
                    </a>
                    <a href="#" className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition-all hover:scale-110 transform duration-300 shadow-md border-2 border-blue-300">
                      <img src="/images/social/twitter.svg" alt="Twitter" className="h-8 w-8 filter brightness-0 invert" />
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600 italic">Connect with us on social media!</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h2 className="text-3xl text-blue-500 mb-6 font-modern">Book Your Photo Booth</h2>
                  
                  {formStatus.submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                      {formStatus.message}
                    </div>
                  ) : formStatus.error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      {formStatus.message}
                    </div>
                  ) : formStatus.message ? (
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
                      {formStatus.message}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="eventTime" className="block text-gray-700 font-medium mb-2">Event Time</label>
                          <input
                            type="text"
                            id="eventTime"
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="eventDate" className="block text-gray-700 font-medium mb-2">Event Date</label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="venueStreet" className="block text-gray-700 font-medium mb-2">Venue Address: Street *</label>
                        <input
                          type="text"
                          id="venueStreet"
                          name="venueStreet"
                          value={formData.venueStreet}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City *</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="province" className="block text-gray-700 font-medium mb-2">Province *</label>
                          <select
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          >
                            <option value="">Select Province</option>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="NT">Northwest Territories</option>
                            <option value="NU">Nunavut</option>
                            <option value="YT">Yukon</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">Postal Code *</label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">Estimated Number of Guests *</label>
                        <input
                          type="number"
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a Service</option>
                          <option value="standard">Standard Photo Booth</option>
                          <option value="ai-photobooth">AI Glam Booth</option>
                          <option value="mirror">Mirror Booth</option>
                          <option value="selfie">Self-Serve Booth</option>
                          <option value="corporate">Corporate Event Package</option>
                          <option value="wedding">Wedding Package</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
                      >
                        Book Now
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-8 font-modern">
              Find Us
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96" id="map"></div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - Collapsible */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-8 font-modern">
                Frequently Asked Questions
              </h2>
              
              <div className="border rounded-lg overflow-hidden shadow-sm">
                {[
                  {
                    question: "How far in advance should I book?",
                    answer: "We recommend booking at least 2-3 months in advance for peak season events (May-October) and 1-2 months for off-season events. However, feel free to contact us for last-minute availability!"
                  },
                  {
                    question: "What areas do you serve?",
                    answer: "We primarily serve Saint John and surrounding areas in New Brunswick. For events outside this region, please contact us for availability and any additional travel fees."
                  },
                  {
                    question: "Do you require a deposit?",
                    answer: "Yes, we require a 50% deposit to secure your booking date, with the remaining balance due one week before your event."
                  },
                  {
                    question: "What happens if I need to cancel?",
                    answer: "Our cancellation policy allows for a full refund of your deposit if cancelled more than 30 days before your event. Cancellations within 30 days are subject to our detailed policy, which we're happy to discuss."
                  },
                  {
                    question: "What is included in your photo booth packages?",
                    answer: "Our packages typically include the booth rental, an attendant, props, unlimited prints, digital copies, and a custom template. Specific inclusions vary by package, so please check our package details or contact us for more information."
                  }
                ].map((item, index, array) => (
                  <div key={index} className={`border-b ${index === array.length - 1 ? 'border-b-0' : ''}`}>
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full text-left p-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-blue-500">{item.question}</h3>
                      <svg 
                        className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="p-4 bg-white border-t border-gray-100">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
