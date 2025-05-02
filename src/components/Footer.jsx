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
            jackphotoboothca@gmail.com
          </p>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2025 Jack PhotoBoothCA - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
