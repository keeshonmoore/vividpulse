import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      nav.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('animate-fade-slide');
      });
    }
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-vp-dark/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center" ref={navRef}>
        <a href="/" className="animate-on-load">
          <img
            src="./logo.png"
            alt="VividPulse Logo"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-vp-white text-lg font-semibold relative group hover:text-vp-pink transition-colors animate-on-load"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-vp-pink group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            className="gradient-button text-vp-white hover:bg-vp-orange hover:text-vp-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-on-load"
          >
            Get Started
          </Button>
        </div>
        <button
          className="md:hidden text-vp-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-vp-dark/80 backdrop-blur-sm px-4 py-4 animate-slide-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-vp-white text-lg font-semibold hover:text-vp-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button
            className="mt-4 gradient-button text-vp-dark hover:bg-vp-orange hover:text-vp-dark rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full"
          >
            Get Started
          </Button>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.6s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .gradient-button {
          background: linear-gradient(
            135deg,
            #ffbc0a 0%,
            #ec7d10 25%,
            #fc2f00 50%,
            #ec0868 75%,
            #c200fb 100%
          );
        }
      `}</style>
    </header>
  );
}

export default Header;