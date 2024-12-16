import { Hero } from '../components/services/Hero';
import { Expertise } from '../components/services/Expertise';
import { FAQList } from '../components/services/faq/FAQList';
import { Packages } from '../components/services/Packages';

export function Services() {
  return (
    <div>
      <Hero />
      <Expertise />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FAQList />
          <Packages />
        </div>
      </section>
    </div>
  );
}