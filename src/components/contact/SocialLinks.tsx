import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-6 mt-12">
      <a href="#" className="text-black hover:text-primary-blue">
        <Linkedin strokeWidth={2} fill="currentColor" />
      </a>
      <a href="#" className="text-black hover:text-primary-blue">
        <Phone strokeWidth={2} fill="currentColor" />
      </a>
      <a href="#" className="text-black hover:text-primary-blue">
        <Mail strokeWidth={2} fill="currentColor" />
      </a>
      <a href="#" className="text-black hover:text-primary-blue">
        <Instagram strokeWidth={2} fill="currentColor" />
      </a>
    </div>
  );
}