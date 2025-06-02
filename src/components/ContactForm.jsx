import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

function ContactForm() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('animate-scale-fade');
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, plan: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, plan, message } = formData;
    if (!name || !phone || !email || !plan || !message) {
      toast.error('Please fill out all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/2bd74d1b-8fed-4963-9613-6648f41c8a90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, plan, message, type: 'contact' }),
      });

      if (response.status === 200) {
        toast.success('Message sent successfully', {
          description: 'We will be in contact shortly!',
        });
        setFormData({ name: '', phone: '', email: '', plan: '', message: '' });
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
    <section
      id="contact-form"
      ref={sectionRef}
      className="py-24 bg-vp-white/80 backdrop-blur-sm"
    >
      <div className="px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-vp-dark text-center mb-8 animate-on-load">
          Get in Touch
        </h2>
        <p className="text-xl text-vp-dark/80 text-center mb-12 animate-on-load leading-relaxed">
          Have questions or ready to start automating your business? Fill out the form below, and we’ll reach out soon!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 animate-on-load">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-vp-dark mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-vp-dark mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-vp-dark mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="plan" className="block text-lg font-semibold text-vp-dark mb-2">
              Plan
            </label>
            <Select
              name="plan"
              value={formData.plan}
              onValueChange={handleSelectChange}
              disabled={isSubmitting}
            >
              <SelectTrigger
                id="plan"
                className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300"
              >
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Starter">Starter Plan</SelectItem>
                <SelectItem value="Growth">Growth Plan</SelectItem>
                <SelectItem value="Enterprise">Enterprise Plan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-vp-dark mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm focus:ring-2 focus:ring-vp-pink transition-all duration-300 min-h-[150px]"
              disabled={isSubmitting}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-vp-pink text-vp-white hover:bg-vp-orange rounded-xl hover:scale-105 transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{`
        section {
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
      `}</style>
    </section>
  );
}

export default ContactForm;