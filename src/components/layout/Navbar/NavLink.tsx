import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`hover:text-gray-500 transition-colors ${
        isActive ? 'text-gray-500 underline' : ''
      } ${className}`}
      onClick={() => {
        // Close mobile menu when a link is clicked
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
          mobileMenu.classList.remove('show');
        }
      }}
    >
      {children}
    </Link>
  );
}