import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

function Footer() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('animate-scale-fade');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/2bd74d1b-8fed-4963-9613-6648f41c8a90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type: 'newsletter' }),
      });

      if (response.status === 200) {
        toast.success('Subscribed successfully', {
          description: 'Thank you for joining our newsletter!',
        });
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to connect to the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-vp-dark/90 backdrop-blur-sm text-vp-white py-12" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="animate-on-load px-4">
          <img
            src="./logo.png"
            alt="VividPulse Logo"
            className="h-10 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed">
            <a href="mailto:info@vividpulse.ai" className="hover:text-vp-pink transition-colors">info@vividpulse.ai</a><br />
            <a href="tel:+5551234567" className="hover:text-vp-pink transition-colors">(555) 123-4567</a>
          </p>
        </div>
        <div className="animate-on-load px-4">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm relative group hover:text-vp-pink transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-vp-pink group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-on-load px-4">
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4 leading-relaxed">
            Stay updated with the latest in AI automation.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border-vp-dark/20 text-vp-dark bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gradient-button text-vp-dark hover:bg-vp-orange hover:text-vp-dark rounded-xl hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="animate-on-load px-4">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-vp-white hover:text-vp-pink transition-colors hover:scale-110"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-vp-white hover:text-vp-pink transition-colors hover:scale-110"
              aria-label="Visit our Twitter page"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-vp-white hover:text-vp-pink transition-colors hover:scale-110"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm animate-on-load">
        © 2025 VividPulse. All rights reserved.
      </div>
      <style jsx>{`
        footer {
          padding-left: 0;
          padding-right: 0;
        }
        @keyframes scaleFade {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-fade {
          animation: scaleFade 0.8s ease-out forwards;
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
    </footer>
  );
}

export default Footer;