import { useEffect, useRef } from 'react';

function BrandCarousel() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.querySelectorAll('.animate-on-load').forEach((el, index) => {
      el.style.animationDelay = `${index * 0.15}s`;
      el.classList.add('animate-scale-fade');
    });
  }, []);

  // Brand logos (updated with your paths)
  const brands = [
    { name: 'Zoho', logo: './brands/zoho.png' },
    { name: 'Slack', logo: './brands/slack.png' },
    { name: 'Supabase', logo: './brands/supabase.png' },
    { name: 'Google', logo: './brands/google.png' },
    { name: 'Stripe', logo: './brands/stripe.png' },
    { name: 'Paypal', logo: './brands/paypal.png' },
    { name: 'Aws', logo: './brands/aws.png' },
    { name: 'HighLevel', logo: './brands/highlevel.png' },
  ];

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="py-16 bg-vp-white"
    >
      <div className="relative overflow-hidden">
        <div className="flex animate-carousel hover:pause-carousel">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-40 md:w-48 mx-4 animate-on-load"
            >
              <a
                href="#"
                className="block bg-vp-white/80 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300"
                aria-label={`Visit ${brand.name}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
        .pause-carousel:hover {
          animation-play-state: paused;
        }
        .animate-scale-fade {
          animation: scaleFade 0.8s ease-out forwards;
        }
        a {
          position: relative;
        }
        a:hover img {
          filter: grayscale(0);
        }
      `}</style>
    </section>
  );
}

export default BrandCarousel;