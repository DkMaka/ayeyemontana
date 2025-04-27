
import  { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-3 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-0">
              <img 
                src="https://i.postimg.cc/1zRtGMqW/Whats-App-Image-2025-04-12-at-07-23-50-f9f0fc79.jpg" 
                alt="Montana Logo"
                className="h-16 w-18 rounded-s-full object-cover"
              />
              <span className="text-1x1 font-display font-bold text-white">Student Accommodation</span>
            </Link>
            <p className="text-amber-400 mb-3">Smart living for smart future leaders</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-montana-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-montana-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-montana-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:ml-8">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Accommodation
                </Link>
              </li>
              
                
                
              
              <li>
                <Link to="/gallery" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Accommodation Types</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Single Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-montana-secondary hover:underline transition-colors text-sm flex items-center">
                  <span className="w-1 h-4 bg-montana-secondary mr-2"></span>
                  Double Rooms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-montana-secondary shrink-0 mt-1" />
                <span className="text-sm">Thohoyandou,Miluwani Block F, Limpopo, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-montana-secondary shrink-0" />
                <span className="text-sm">+27 (15) 962-8000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-montana-secondary shrink-0" />
                <a href="mailto:montana@univen.ac.za" className="text-sm hover:text-montana-secondary hover:underline transition-colors">
                  montana@univen.ac.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Montana Student Accommodation. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <a href="#" className="text-sm hover:text-montana-secondary hover:underline transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-montana-secondary hover:underline transition-colors">Terms and Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
