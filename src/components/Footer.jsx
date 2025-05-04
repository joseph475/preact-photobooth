import { h } from 'preact';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-2 font-heading">
            <span className="text-blue-500">JACK</span>
            <br />
            <span className="text-blue-300">PHOTOBOOTHCA</span>
          </h2>
          <p className="text-gray-600 text-center">
            East Side, Saint John, NB, Canada, New Brunswick
            <br />
            +1 236-234-1229
            <br />
            info@jackphotobooth.ca
          </p>
        </div>
        
        <div className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a></li>
            <li><a href="/gallery" className="text-gray-600 hover:text-blue-500 transition-colors">Gallery</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a></li>
            <li><a href="/privacy-policy" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2025 Jack PhotoBoothCA - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
