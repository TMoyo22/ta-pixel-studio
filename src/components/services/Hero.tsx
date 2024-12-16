import { Button } from '../ui/Button';

export function Hero() {
    return (
      <section 
        className="relative h-[60vh] bg-cover bg-center text-white flex items-center"
        style={{ backgroundImage: "url('/src/assets/service_hero.jpg')" }} // Replace with your image path
      >
        <div className="container mx-auto px-6">
          <h1 className="font-jacques text-5xl mb-4 text-center">
            Explore Our Services
          </h1>
          <p className="text-xl max-w-md ml-auto">
            Discover tailored web development and digital marketing solutions for SMEs.
          </p>
        </div>
      </section>
    );
  }
