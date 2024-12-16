import { ReactNode } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <div className="w-full h-px bg-gray-200 my-8" />
      <Footer />
    </div>
  );
}