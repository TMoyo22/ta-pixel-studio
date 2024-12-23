import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-6 mt-12">
      <a href="https://www.linkedin.com/company/ta-pixel-studio/about" className="text-black hover:text-gray-500">
        <Linkedin strokeWidth={2} fill="none" />
      </a>
      <a href="+27810987527" className="text-black hover:text-gray-500">
        <Phone strokeWidth={2} fill="none" />
      </a>
      <a href="tapixelstudio@gmail.com" className="text-black hover:text-gray-500">
        <Mail strokeWidth={2} fill="none" />
      </a>
      <a href="https://www.instagram.com/tapixelstudio" className="text-black hover:text-gray-500">
        <Instagram strokeWidth={2} fill="none" />
      </a>
    </div>
  );
}