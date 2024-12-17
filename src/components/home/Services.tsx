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
              src="/assets/home_img1.jpg"
              alt="Digital Transformation"
              className="rounded-[15px] w-full h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="gap-2 flex flex-row justify-center mb-4 mt-11">
    <div className="mx-2 pt-11">
        <span className="bg-white border border-black rounded-[15px] px-2 py-1 sm:px-4 sm:py-2 w-auto">
          Web Development
        </span>
    </div>
    <div className="mx-2 pt-11">
        <span className="bg-white border border-black rounded-[15px] px-2 py-1 sm:px-4 sm:py-2 w-auto">
          Digital Marketing
        </span>
    </div>
</div>


        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img 
            src="/assets/home_img2.jpg"
            alt="Web Development"
            className="rounded-[15px] w-full h-[190px] object-cover"
          />
          <div>
            <h3 className="font-jacques text-2xl mb-4">Web Development</h3>
            <p>Custom web experiences that align with your business objectives.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-jacques text-2xl mb-4">Digital Marketing</h3>
            <p>Strategic solutions to boost your online presence.</p>
          </div>
          <img 
            src="/assets/home_img3.jpg"
            alt="Digital Marketing"
            className="rounded-[15px] w-full h-[190px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}