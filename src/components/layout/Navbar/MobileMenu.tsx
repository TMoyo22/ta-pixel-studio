import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';
import { Button } from '../../ui/Button';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-4 mt-2">
          <div className="flex flex-col space-y-4 px-4">
            <NavLink to="/" className="block w-full text-left">Home</NavLink>
            <NavLink to="/services" className="block w-full text-left">Services</NavLink>
            <NavLink to="/team" className="block w-full text-left">Team</NavLink>
            <Button to="/contact" variant="primary" className="w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </div>
  );
}