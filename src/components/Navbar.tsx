import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const lastMenuItemRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 100)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation in mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }

      // Trap focus within menu when open
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstMenuItemRef.current) {
          e.preventDefault();
          lastMenuItemRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === lastMenuItemRef.current) {
          e.preventDefault();
          firstMenuItemRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Focus first item when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      firstMenuItemRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
   <nav 
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-montana-card2 shadow-md py-0.1'  // Compact when scrolled
          : 'bg-transparent py-0.1'             // Slim transparent state
      }`}
    >
        <div className="container-custom flex justify-between items-center h-13"> 

        <Link 
          to="/" 
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-montana-secondary focus:ring-offset-2 rounded"
        > 
          <img 
            src="https://i.postimg.cc/MG2dhZV0/67fa0ba80cdf0a000d836d2e.png" 
            alt="Montana Logo"
            className="h-23 w-17 rounded object-cover"
            width={125}
            height={70}
            loading="lazy"
          />
         
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-display font-medium text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-montana-secondary focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive ? 'text-montana-secondary' : 'text-white hover:text-montana-accent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="#booking" 
            className="btn btn-secondary flex items-center gap-2 hover:scale-105 transition-transform focus:scale-105"
            aria-label="Book now"
          >
            <Phone className="h-5 w-5" />
            <span>Book Now</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-montana-secondary rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-[#121826] border-t border-white/10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <NavLink 
                key={link.name}
                to={link.path}
                ref={index === 0 ? firstMenuItemRef : index === navLinks.length - 1 ? lastMenuItemRef : null}
                className={({ isActive }) => 
                  `font-display font-medium text-lg py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-montana-secondary ${
                    isActive ? 'text-montana-secondary bg-white/10' : 'text-white hover:bg-white/5'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="#booking" 
              className="btn btn-secondary w-full flex justify-center items-center gap-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
              ref={lastMenuItemRef}
              role="menuitem"
              tabIndex={0}
            >
              <Phone className="h-5 w-5" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;