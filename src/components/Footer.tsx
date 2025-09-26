import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Redlands', 'Mentone', 'Highland', 'Loma Linda', 'Colton', 
    'San Bernardino', 'Yucaipa', 'Calimesa', 'Banning', 'Beaumont', 'Riverside'
  ];

  return (
    <footer className="bg-[#004078] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                  src="/logo.png"
                alt="QuickPros Logo" 
                className="h-10 w-10 mr-3"
                  loading="lazy"

              />
              <div>
                <h3 className="text-xl font-bold">QuickPros</h3>
                <p className="text-[#f8a825] text-sm">Plumbing & Air</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Fast. Friendly. Family-Owned. That's the QuickPros Way!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/plumbing" className="text-gray-300 hover:text-[#f8a825]">Plumbing Services</Link></li>
              <li><Link to="/hvac" className="text-gray-300 hover:text-[#f8a825]">HVAC Services</Link></li>
              <li><Link to="/plumbing" className="text-gray-300 hover:text-[#f8a825]">Emergency Repairs</Link></li>
              <li><Link to="/plumbing" className="text-gray-300 hover:text-[#f8a825]">Water Heaters</Link></li>
              <li><Link to="/plumbing" className="text-gray-300 hover:text-[#f8a825]">Drain Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#f8a825]" />
                <a href="tel:9519046660" className="text-gray-300 hover:text-[#f8a825]">
                  (951) 904-6660
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-[#f8a825] mt-1" />
                <div className="text-gray-300">
                  100 W. Stuart Ave.<br />
                  Redlands, CA 92374
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-[#f8a825]" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/book-online" className="text-gray-300 hover:text-[#f8a825]">Book Online</Link></li>
              <li><Link to="/coupons" className="text-gray-300 hover:text-[#f8a825]">Current Specials</Link></li>
              <li><Link to="/financing" className="text-gray-300 hover:text-[#f8a825]">Financing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#f8a825]">Contact Us</Link></li>
              <li><a href="tel:9519046660" className="text-[#e23b19] hover:text-[#f8a825] font-semibold">Emergency Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-300 text-sm">
              Proudly Serving {serviceAreas.join(', ')}, California
            </p>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 QuickPros Plumbing & Air. All rights reserved. | Licensed, Bonded & Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
