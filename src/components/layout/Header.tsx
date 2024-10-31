import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { TreePine } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHome) return null;

  return (
    <header className={`sticky top-0 z-50 transition-colors ${
      isScrolled ? 'bg-background/80 header-blur border-b border-border' : ''
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <TreePine className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Phuket Guru</span>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}