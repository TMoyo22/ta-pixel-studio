import { Check } from 'lucide-react';

const packages = [
  {
    title: 'Basic',
    description: 'Ideal for startups seeking essential web presence',
    features: ['Custom Website Design', 'Mobile Responsive', 'Basic SEO Setup', '3 Pages']
  },
  {
    title: 'Intermediate',
    description: 'Solutions for growing businesses',
    features: ['Everything in Basic', 'E-commerce Integration', 'Advanced SEO', 'Social Media Integration']
  },
  {
    title: 'Advanced',
    description: 'Large scale solutions for large enterprises',
    features: ['Everything in Intermediate', 'Custom Features', 'Analytics Dashboard', '24/7 Support']
  }
];

export function Packages() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="font-jacques text-5xl mb-12 text-center">Flexible and affordable pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-primary-blue" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}