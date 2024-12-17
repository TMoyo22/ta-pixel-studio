import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ to, children, className = '', onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`hover:text-gray-500 transition-colors ${
        isActive ? 'text-gray-500' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}