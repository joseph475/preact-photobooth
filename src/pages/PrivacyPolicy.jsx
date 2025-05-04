import { h } from 'preact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-blue-500 py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute -top-2 -right-2 text-blue-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">•</span>
          </h1>
          
          <p className="text-white text-lg max-w-2xl mx-auto mb-6">
            How we handle your information and protect your privacy
          </p>
          
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Last Updated: May 3, 2025</h2>
              <p>
                Welcome to Photobooth ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Information We Collect</h2>
              
              <h3 className="text-xl text-blue-400 mb-2">Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Fill out forms on our website (such as contact or booking forms)</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Provide feedback or contact us</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, and any other information you choose to provide.
              </p>
              
              <h3 className="text-xl text-blue-400 mb-2">Photos and Media</h3>
              <p>
                When you use our photobooth services, we collect photos and videos taken during your event. These may be:
              </p>
              <ul>
                <li>Displayed in our physical gallery at events</li>
                <li>Uploaded to our website gallery with your permission</li>
                <li>Shared on social media platforms with your consent</li>
              </ul>
              
              <h3 className="text-xl text-blue-400 mb-2">Social Media Integration</h3>
              <p>
                Our website integrates with social media platforms, including Facebook. When you interact with these features:
              </p>
              <ul>
                <li>We may display photos from our Facebook page in our gallery</li>
                <li>We access only publicly available information or information you've granted us permission to access</li>
                <li>We do not store Facebook login credentials</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill your bookings and requests</li>
                <li>Communicate with you about our services, promotions, and events</li>
                <li>Display photos in our gallery with your permission</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul>
                <li>With your consent (e.g., when you agree to share photos on social media)</li>
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Facebook Integration</h2>
              <p>
                Our website integrates with Facebook to display photos from our Facebook page. This integration:
              </p>
              <ul>
                <li>Uses the Facebook Graph API to fetch publicly available photos</li>
                <li>Requires a Facebook access token that is securely stored</li>
                <li>Only displays photos that are already public on our Facebook page</li>
                <li>Does not give us access to your personal Facebook account</li>
              </ul>
              <p>
                By using our website, you acknowledge that photos displayed through Facebook integration are subject to Facebook's Privacy Policy and Terms of Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (where applicable)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request removal of your photos from our gallery</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4 font-modern">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Photobooth</p>
                <p>Email: info@jackphotobooth.ca</p>
                <p>Phone: +1 236-234-1229</p>
                <p>Address: East Side, Saint John, NB, Canada, New Brunswick</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
