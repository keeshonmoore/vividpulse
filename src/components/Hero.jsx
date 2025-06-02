import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Plane } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

function Hero() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('animate-fade-slide');
      });
    }
  }, []);

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
        body: JSON.stringify({ email, type: 'hero' }),
      });

      if (response.status === 200) {
        toast.success('We will be in contact shortly', {
          description: 'Thank you for your interest!',
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
    <section
      id="home"
      ref={sectionRef}
      className="bg-gradient-to-br from-vp-white via-vp-pink/20 to-vp-purple/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,8,104,0.2),transparent)] animate-gradient-shift" />
      <div className="relative z-10 text-center space-y-8 px-4 md:px-8 max-w-4xl mx-auto py-24">
        <div
          className="flex justify-center items-center gap-2 bg-transparent border border-vp-dark rounded-2xl px-4 py-1 max-w-xs mx-auto mb-0 animate-on-load"
          aria-label="Powered by KOLG"
        >
          <span className="text-xs font-semibold text-vp-dark">
            Powered By KOLG
          </span>
          <Bot className="w-3 h-3 text-vp-dark" aria-hidden="true" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-vp-dark leading-tight animate-on-load">
          Transform Your Business with <span className="gradient-text">VividPulse</span>
        </h1>
        <p className="text-xl text-vp-dark/80 max-w-2xl mx-auto animate-on-load">
          Streamline operations and boost efficiency with custom AI automation
          tailored to your unique needs.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto animate-on-load">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border-vp-dark/20 bg-vp-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-vp-pink"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-vp-pink text-vp-white hover:bg-vp-orange rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <Plane className="w-4 h-4" aria-hidden="true" />
            {isSubmitting ? 'Submitting...' : 'Get a Demo'}
          </Button>
        </form>
      </div>
      <div className="relative z-10 animate-on-load mt-0">
        <img
          src="./hero.png"
          alt="Laptop and Phone Illustration"
          className="w-full h-auto rounded-none shadow-none"
        />
      </div>
      <style jsx>{`
        section {
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 0;
        }
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes flowingGradient {
          0% {
            background-position: 400% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.8s ease-out forwards;
        }
        .animate-gradient-shift {
          animation: gradientShift 15s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(
            135deg,
            #ffbc0a 0%,
            #ec7d10 25%,
            #fc2f00 50%,
            #ec0868 75%,
            #c200fb 100%
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          animation: flowingGradient 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;