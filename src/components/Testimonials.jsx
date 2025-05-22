import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Christine Gem Salcedo',
      date: '2025-01-29',
      text: 'Absolutely amazing experience! The photo booth was a hit at our wedding. Highly recommended! Money worth it.',
      initial: 'C'
    },
    {
      id: 2,
      name: 'Soumia Laidi',
      date: '2025-02-08',
      text: 'Professional service and high-quality photos. Our guests loved it!',
      initial: 'S'
    },
    {
      id: 3,
      name: 'Jules Momo',
      date: '2024-11-02',
      text: 'The AI glam booth was the highlight of our corporate event. Will definitely book again!',
      initial: 'J'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-700 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          WHAT OUR CLIENTS SAY
        </h2>
        
        <div className="text-center mb-12">
          <div className="text-6xl font-bold">5.0</div>
          <div className="flex justify-center my-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <div className="text-lg">Based on 124 reviews</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <span className="font-bold text-white text-lg">{testimonial.initial}</span>
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.date}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-lg">{testimonial.text}</p>
              {testimonial.id === 1 && (
                <Link href="/reviews" className="text-blue-500 hover:text-blue-400 mt-4 inline-block font-medium">
                  Read full review →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
