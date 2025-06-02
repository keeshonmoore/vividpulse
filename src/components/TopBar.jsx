import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

function TopBar() {
  return (
    <div className="bg-vp-dark text-vp-white py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@vividpulse.ai</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(555) 123-4567</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-vp-pink transition-colors">
            <Facebook size={16} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-vp-pink transition-colors">
            <Twitter size={16} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:text-vp-pink transition-colors">
            <Instagram size={16} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;