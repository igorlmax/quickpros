import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.webp"
              alt="Bucky the Beaver - QuickPros Mascot" 
              className="h-12 w-12 mr-3"
              loading="lazy"
            />
            <div>
              <p className="text-2xl font-bold text-[#004078]" aria-label="QuickPros">QuickPros</p>
              <p className="text-sm text-[#e23b19] font-semibold">Plumbing & Air</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#004078] hover:text-[#e23b19] font-medium">Home</Link>
            <Link to="/plumbing" className="text-[#004078] hover:text-[#e23b19] font-medium">Plumbing</Link>
            <Link to="/hvac" className="text-[#004078] hover:text-[#e23b19] font-medium">HVAC</Link>
            <Link to="/coupons" className="text-[#004078] hover:text-[#e23b19] font-medium">Coupons</Link>
            <Link to="/financing" className="text-[#004078] hover:text-[#e23b19] font-medium">Financing</Link>
            <Link to="/faq" className="text-[#004078] hover:text-[#e23b19] font-medium">FAQ</Link>
            <Link to="/contact" className="text-[#004078] hover:text-[#e23b19] font-medium">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9519046660" className="flex items-center text-[#004078] hover:text-[#e23b19]">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(951) 904-6660</span>
            </a>
            <Button asChild className="bg-[#e23b19] hover:bg-[#e23b19]/90">
              <Link to="/book-online">Book Service Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/plumbing" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>Plumbing</Link>
            <Link to="/hvac" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>HVAC</Link>
            <Link to="/financing" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>Financing</Link>
            <Link to="/coupons" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>Coupons</Link>
            <Link to="/faq" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="text-[#004078] hover:text-[#e23b19] font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:9519046660" className="flex items-center text-[#004078] hover:text-[#e23b19]" onClick={() => setIsMenuOpen(false)}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(951) 904-6660</span>
            </a>
            <Button asChild className="bg-[#e23b19] hover:bg-[#e23b19]/90 w-fit">
              <Link to="/book-online" onClick={() => setIsMenuOpen(false)}>Book Service Now</Link>
            </Button>
          </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
