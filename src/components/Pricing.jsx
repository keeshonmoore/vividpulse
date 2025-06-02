import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.querySelectorAll('.animate-on-load').forEach((el, index) => {
      el.style.animationDelay = `${index * 0.15}s`;
      el.classList.add('animate-scale-fade');
    });
  }, []);

  const plans = [
    {
      name: 'Starter Plan',
      price: '$350/Month',
      features: [
        '3 Custom-Built Automations: Select any 3 of our core services, tailored to your needs.',
        'Automation Maintenance: Monthly updates to keep automations running efficiently.',
        'Automation Hosting: Reliable cloud hosting on our secure servers.',
        'Basic Analytics Dashboard: Monitor automation performance with essential metrics.',
        '24/7 Customer Support: Email and chat support with responses within 24 hours.',
        'Ideal For: Small businesses or startups looking to automate key processes affordably.',
      ],
      isPopular: false,
    },
    {
      name: 'Growth Plan',
      price: '$600/Month',
      features: [
        '6 Custom-Built Automations: Choose any 6 core services for expanded automation.',
        'Automation Maintenance: Bi-weekly updates with performance optimizations.',
        'Automation Hosting: Premium hosting with 99.9% uptime and faster processing speeds.',
        'API Access: Integrate automations with your existing tools (e.g., CRM, ERP).',
        'Monthly Strategy Call: 30-minute consultation to align automations with your goals.',
        'Advanced Analytics Dashboard: Detailed reports on automation impact, including ROI and efficiency metrics.',
        '24/7 Customer Support: Priority support via email, chat, and phone, with responses within 12 hours.',
        'Ideal For: Growing businesses needing broader automation and deeper insights.',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise Plan',
      price: '$1,200/Month',
      features: [
        'Unlimited Custom Automations: Access all 9 core services, plus custom-built solutions for unique needs.',
        'Automation Maintenance: Real-time monitoring and weekly optimization for peak performance.',
        'Automation Hosting: Enterprise-grade hosting with dedicated servers, top-tier security, and scalability.',
        'Custom Integration & Onboarding: Full support for integrating with complex systems and training your team.',
        'Quarterly Business Reviews: In-depth sessions to refine automations and drive strategic growth.',
        'SLA Guarantee: 99.99% uptime and performance commitments.',
        'Comprehensive Analytics Suite: Real-time dashboards, predictive analytics, and custom reports tailored to your KPIs.',
        '24/7 Customer Support: VIP support with a dedicated account manager, responses within 2 hours, and on-demand troubleshooting.',
        'Ideal For: Large businesses requiring comprehensive automation and strategic support.',
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-vp-white/80"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-vp-dark text-center mb-16 animate-on-load">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-vp-white/80 backdrop-blur-sm rounded-2xl flex flex-col min-h-[500px] animate-on-load ${
                plan.isPopular ? 'scale-105 shadow-2xl' : 'shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-vp-pink to-vp-purple text-vp-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse"
                  aria-label="Most Popular Plan"
                >
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <div className="flex-1 relative z-10">
                <h3 className="text-3xl font-bold text-vp-dark mb-3">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-vp-pink mb-6">
                  {plan.price}
                </p>
                <ul className="text-vp-dark mb-8 space-y-4">
                  {plan.features.map((feature) => {
                    const [boldPart, rest] = feature.split(':', 2);
                    return (
                      <li key={feature} className="text-base flex items-start">
                        <span className="text-vp-pink mr-2">•</span>
                        <span>
                          <span className="font-bold">{boldPart}</span>
                          {rest ? `: ${rest}` : ''}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Button
                className={`w-full rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mt-auto ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-vp-pink to-vp-purple text-vp-white hover:from-vp-orange hover:to-vp-pink'
                    : 'bg-vp-pink text-vp-white hover:bg-vp-orange'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
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

export default Pricing;