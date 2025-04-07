
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Leaf, CreditCard, Brain, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', path: '/', icon: null },
  { name: 'SoulSeed Journey', path: '/soulseed', icon: Leaf },
  { name: 'Life Credits', path: '/lifecredits', icon: CreditCard },
  { name: 'Wisdom Stream', path: '/wisdom', icon: Brain },
  { name: 'HoloGarden', path: '/hologarden', icon: Layers },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-spirit flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-genesis-spirit to-genesis-water bg-clip-text text-transparent">
                GENESIS SYSTEM
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                <div className="flex items-center space-x-1">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
