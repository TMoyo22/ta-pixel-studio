import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'inverted';
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ 
  children, 
  to, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md transition-colors text-center";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-transparent",
    secondary: "bg-primary-blue text-white hover:bg-secondary-blue border border-transparent",
    inverted: "bg-white text-black hover:bg-gray-100 border border-black"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={buttonStyles}>
      {children}
    </button>
  );
}