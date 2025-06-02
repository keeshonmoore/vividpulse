import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('animate-scale-fade');
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-vp-white"
    >
      <div className="px-4 md:px-8">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-vp-dark mb-6 animate-on-load">
            About <span className="gradient-text">VividPulse</span>
          </h2>
          <p className="text-xl text-vp-dark/80 leading-relaxed animate-on-load">
            At VividPulse, we’re passionate about empowering service businesses with AI-driven automation. Founded in 2023, our mission is to streamline operations, save time, and drive growth through cutting-edge technology tailored to your unique needs.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-vp-dark/80 backdrop-blur-sm rounded-2xl p-8 mb-16 max-w-4xl mx-auto animate-on-load">
          <h3 className="text-3xl font-bold text-vp-white mb-4">Our Mission</h3>
          <p className="text-lg text-vp-white/80 leading-relaxed">
            "We believe every business deserves the freedom to focus on what matters most. By automating repetitive tasks—such as lead qualification, scheduling, and invoicing—we help you reclaim your time and scale effortlessly. Our solutions are designed to integrate seamlessly with your tools and evolve with your goals."
          </p>
        </div>

        {/* Team Spotlight */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-load">
          <h3 className="text-3xl font-bold text-vp-dark mb-4">Our Team</h3>
          <p className="text-lg text-vp-dark/80 leading-relaxed mb-6">
            Our team of AI experts, developers, and business strategists is dedicated to your success. With years of experience in automation and a passion for innovation, we’re here to guide you every step of the way.
          </p>
          <div className="flex justify-center gap-6">
            <div className="w-24 h-24 bg-vp-dark/20 rounded-full"></div>
            <div className="w-24 h-24 bg-vp-dark/20 rounded-full"></div>
            <div className="w-24 h-24 bg-vp-dark/20 rounded-full"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-on-load">
          <h3 className="text-3xl font-bold text-vp-dark mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-vp-dark/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Join thousands of businesses leveraging VividPulse to automate and grow. Contact us to start your journey today!
          </p>
          <Button
            className="bg-vp-pink text-vp-white hover:bg-vp-orange rounded-xl hover:scale-105 transition-all duration-300"
          >
            <a href="#contact-form">Get Started</a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        section {
          padding-left: 0;
          padding-right: 0;
        }
        .border-gradient {
          border-image: linear-gradient(to right, #ec0868, #c200fb) 1;
          border-width: 2px;
          border-style: solid;
        }
        .gradient-text {
          background: linear-gradient(to right, #ec0868, #c200fb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
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

export default About;