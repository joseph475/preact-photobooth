import { h } from 'preact';

const BackdropGallery = () => {
  const backdrops = [
    {
      id: 1,
      name: 'Champagne Gold Sequin',
      image: '/images/1.jpeg'
    },
    {
      id: 2,
      name: 'White Flower Wall',
      image: '/images/2.jpeg'
    },
    {
      id: 3,
      name: 'Pink and Gold Marble',
      image: '/images/3.jpeg'
    },
    {
      id: 4,
      name: 'Gold Sequin',
      image: '/images/4.jpeg'
    },
    {
      id: 5,
      name: 'Rustic',
      image: '/images/5.jpeg'
    },
    {
      id: 6,
      name: 'The Tropics',
      image: '/images/6.jpeg'
    },
    {
      id: 7,
      name: 'White and Gold Geometric',
      image: '/images/7.jpg'
    },
    {
      id: 8,
      name: 'Black and Gold Leaves',
      image: '/images/8.jpg'
    },
    {
      id: 9,
      name: 'Black and Gold Geometric',
      image: '/images/9.jpg'
    },
    {
      id: 10,
      name: 'White Floral',
      image: '/images/10.jpg'
    },
    {
      id: 11,
      name: 'Green Screen',
      image: '/images/11.jpg'
    },
    {
      id: 12,
      name: 'Black Marble',
      image: '/images/1.jpeg'
    },
    {
      id: 13,
      name: 'White Marble',
      image: '/images/2.jpeg'
    },
    {
      id: 14,
      name: 'Water Depths',
      image: '/images/3.jpeg'
    },
    {
      id: 15,
      name: 'Brushed Smoke',
      image: '/images/4.jpeg'
    },
    {
      id: 16,
      name: 'Disco',
      image: '/images/5.jpeg',
    },
    {
      id: 17,
      name: 'Shine Bright Like Diamonds',
      image: '/images/6.jpeg',
    },
    {
      id: 18,
      name: 'String Lights',
      image: '/images/7.jpg',
    },
    {
      id: 19,
      name: 'Gold Diamonds',
      image: '/images/8.jpg',
    },
    {
      id: 20,
      name: 'Nude Aesthetic',
      image: '/images/9.jpg',
    },
    {
      id: 21,
      name: 'Splash of Gold',
      image: '/images/10.jpg',
    },
    {
      id: 22,
      name: 'Rose Gold Swirl',
      image: '/images/11.jpg',
    },
    {
      id: 23,
      name: 'Christmas 1',
      image: '/images/1.jpeg',
    },
    {
      id: 24,
      name: 'Christmas 2',
      image: '/images/2.jpeg',
    },
    {
      id: 25,
      name: 'Christmas 3',
      image: '/images/3.jpeg',
    },
    {
      id: 26,
      name: 'Christmas 4',
      image: '/images/4.jpeg',
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8 font-display">
          BACKDROP COLLECTION
        </h2>
        
        <div className="mb-8">
          <p className="text-center text-gray-700 mb-6">
            Browse our extensive collection of premium backdrops for your photo booth experience.
            We're constantly updating our selection to provide you with the greatest options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backdrops.map((backdrop) => (
            <div key={backdrop.id} className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src={backdrop.image} 
                alt={backdrop.name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block">
                  {backdrop.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackdropGallery;
