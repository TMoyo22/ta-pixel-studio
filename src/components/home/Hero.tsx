import { Button } from '../ui/Button';

export function Hero() {
    return (
      <section 
        className="relative h-screen bg-cover bg-center text-white flex items-center"
        style={{ backgroundImage: "url('/assets/home_hero.jpg')" }} 
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-jacques text-5xl mb-10">
            Welcome to T&A Pixel Studio
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empowering SMEs with cutting-edge web development and strategic digital marketing solutions.
          </p>
          <Button 
            to="/services" 
            variant="inverted"
            className="inline-block"
          >
            Learn More
          </Button>
        </div>
      </section>
    );
  }