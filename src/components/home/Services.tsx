import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-jacques text-4xl mb-4">
              Transforming Your Vision into Reality
            </h2>
            <p className="mb-6">
              At T&A Pixel Studio, we craft digital experiences that align with your business objectives.
            </p>
            <Button to="/services" variant="primary" className="flex items-center gap-2">
              Explore Our Services <ArrowRight size={20} />
            </Button>
          </div>
          <div>
            <img 
              src="../src/assets/home_img1.jpg"
              alt="Digital Transformation"
              className="rounded-[10px] w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img 
            src="../src/assets/home_img2.jpg"
            alt="Web Development"
            className="rounded-[10px] w-full h-[190px] object-cover"
          />
          <div>
            <h3 className="text-2xl mb-4">Web Development</h3>
            <p>Custom web experiences that align with your business objectives.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl mb-4">Digital Marketing</h3>
            <p>Strategic solutions to boost your online presence.</p>
          </div>
          <img 
            src="../src/assets/home_img3.jpg"
            alt="Digital Marketing"
            className="rounded-[10px] w-full h-[190px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}