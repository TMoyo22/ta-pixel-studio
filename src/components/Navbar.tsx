import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <Link to="/" className="flex items-center">
        <img src="/logo.svg" alt="T&A Pixel Studio" className="h-8" />
      </Link>
      
      <div className="flex items-center gap-8">
        <Link to="/" className="hover:text-primary-blue">Home</Link>
        <Link to="/services" className="hover:text-primary-blue">Services</Link>
        <Link to="/team" className="hover:text-primary-blue">Team</Link>
      </div>
      
      <Link 
        to="/contact" 
        className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
      >
        Contact Us
      </Link>
    </nav>
  );
}