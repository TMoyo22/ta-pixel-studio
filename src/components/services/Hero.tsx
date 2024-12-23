import { Button } from '../ui/Button';

export function Hero() {
    return (
      <section 
        className="relative h-[60vh] bg-cover bg-center text-white flex items-center"
        style={{ backgroundImage: "url('/assets/service_hero.jpg')" }} // Replace with your image path
      >
        <div className="container mx-auto px-6">
          <h1 className="font-jacques text-5xl mb-4 text-center">
            Explore Our Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
            Discover tailored web development and digital marketing solutions for SMEs.
          </p>
        </div>
      </section>
    );
  }
