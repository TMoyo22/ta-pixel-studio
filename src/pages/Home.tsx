import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Testimonials } from '../components/home/Testimonials';

export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}