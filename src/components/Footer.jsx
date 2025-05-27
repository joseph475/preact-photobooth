import { h } from 'preact';
import { Link } from 'preact-router/match';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6">
              <img src="/images/logo.png" alt="Jack PhotoBooth" className="h-16" />
            </Link>
            <p className="text-gray-300 mb-4">
              East Side, Saint John, NB, Canada, New Brunswick
            </p>
            <p className="text-gray-300 mb-4">
              +1 236-234-1229
            </p>
            <p className="text-gray-300">
              info@jackphotobooth.ca
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-blue-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/packages/wedding" className="text-gray-300 hover:text-blue-500 transition-colors">Photo Booth</Link></li>
              <li><Link href="jackspot" className="text-gray-300 hover:text-blue-500 transition-colors">The JACKSpot</Link></li>
              <li><Link href="/backdrops" className="text-gray-300 hover:text-blue-500 transition-colors">Our Backdrops</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-blue-500">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                <img src="/images/social/facebook.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                <img src="/images/social/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                <img src="/images/social/twitter.svg" alt="Twitter" className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="btn-blue"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>Copyright © 2025 Jack PhotoBoothCA - All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-500 transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
