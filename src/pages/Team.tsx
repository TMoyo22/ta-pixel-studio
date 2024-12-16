import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Tatenda Moyo',
    role: 'Co-Founder and Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    linkedin: '#'
  },
  {
    name: 'Adithiya Maharaj',
    role: 'Co-Founder and Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    linkedin: '#'
  }
];

export function Team() {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <h1 className="font-jacques text-5xl mb-16">Meet Our Experts</h1>
        
        <div className="space-y-12">
          {team.map((member, index) => (
            <div key={index}>
              <div className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-secondary-blue"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              {index < team.length - 1 && (
                <hr className="my-8 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}