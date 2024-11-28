import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "This service is fantastic! It has completely changed the way I do business and saved me countless hours.",
      name: "Jane Doe",
      title: "CEO, Example Company"
    },
    {
      quote: "I couldn't be happier with the results. The team was professional and the product exceeded my expectations.",
      name: "John Smith",
      title: "Founder, Startup"
    },
    {
      quote: "Incredible experience from start to finish! Highly recommended to anyone in need of reliable services.",
      name: "Emily Johnson",
      title: "Marketing Director, BigCorp"
    },
    {
      quote: "They provided exceptional service and support. Definitely recommend them to everyone!",
      name: "Michael Brown",
      title: "Operations Manager, RetailCo"
    },
    {
      quote: "Quality and reliability at its best. Their service is something I can always rely on.",
      name: "Sarah Wilson",
      title: "HR Director, HealthPlus"
    },
    {
      quote: "An innovative solution that has streamlined our processes and improved efficiency.",
      name: "James Taylor",
      title: "Product Manager, Tech Inc."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1; // Adjust items per slide based on screen width
  const totalItems = testimonials.length;
  const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) > maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1) < 0 ? maxIndex : currentIndex - 1);
  };

  return (
<div className="relative w-full max-w-5xl mx-auto mt-10 pb-16">
  {/* Carousel Inner Container */}
  <div className="overflow-hidden relative">
    {/* Carousel Items Wrapper */}
    <div
      className="flex transition-transform duration-500 ease-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <span className="text-sm text-gray-500">{testimonial.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Carousel Controls */}
  <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
    <button
      onClick={prevSlide}
      className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onClick={nextSlide}
      className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>

  );
};

export default TestimonialCarousel;
