import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Beautiful website and professional team to work with!",
    author: "John Doe",
    company: "Dale Enterprises"
  },
  {
    text: "Exceptional service and amazing results!",
    author: "Jane Smith",
    company: "Tech Solutions"
  },
  {
    text: "Transformed our online presence completely!",
    author: "Mike Johnson",
    company: "Growth Industries"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-jacques text-4xl mb-12 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="bg-white p-6 rounded-lg shadow mx-12 items-center">
            <p className="mb-4 text-lg">{testimonials[currentIndex].text}</p>
            <p className="font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-gray-600">{testimonials[currentIndex].company}</p>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}