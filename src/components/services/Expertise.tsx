import { Globe, Radio } from 'lucide-react';
import { Button } from '../ui/Button';

export function Expertise() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gray-600">With Our Expertise</span>
            <h2 className="font-jacques text-4xl my-4">Empower Your Business Online</h2>
            <p className="mb-6">
              T&A Pixel Studio offers comprehensive services to establish and enhance your digital presence.
            </p>
            <hr className="my-6" />
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <Globe className="mb-4 text-primary-blue" size={32} />
                <p>Custom web development tailored to your business needs</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Radio className="mb-4 text-primary-blue" size={32} />
                <p>Effective digital marketing strategies to boost your brand</p>
              </div>
            </div>
            <Button to="/contact" variant="primary">Reach Out To Us</Button>
          </div>
          <div>
            <img 
              src="/assets/service_img1.jpg"
              alt="Digital Services"
              className="rounded-[10px] w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}