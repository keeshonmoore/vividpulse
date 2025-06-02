import { Button } from '@/components/ui/button';
import {
  Filter,
  Calendar,
  CreditCard,
  MessageSquare,
  UserPlus,
  Share2,
  Users,
  Star,
  FileText,
  Package,
} from 'lucide-react';
import { useEffect, useRef } from 'react';

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.querySelectorAll('.animate-on-load').forEach((el, index) => {
      el.style.animationDelay = `${index * 0.15}s`;
      el.classList.add('animate-scale-fade');
    });
  }, []);

  const services = [
    {
      title: 'Automated Lead Qualification and Follow-Up',
      description: 'Captures and scores leads, sending personalized follow-ups to high-potential prospects, enabling faster conversions with less manual sorting.',
      example: 'Nurtures marketing agency leads with tailored case studies.',
      icon: <Filter className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Smart Appointment Scheduling',
      description: 'Syncs calendars, suggests optimal times, and sends reminders to reduce no-shows, eliminating scheduling hassles and improving reliability.',
      example: 'Books cleaning service appointments with automatic cleaner assignments.',
      icon: <Calendar className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Invoice and Payment Automation',
      description: 'Generates and tracks invoices, sending reminders for overdue payments to ensure better cash flow and fewer errors.',
      example: 'Sends consulting invoices post-session with automated follow-ups.',
      icon: <CreditCard className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Customer Support Chatbot',
      description: 'Handles common inquiries 24/7, escalating complex issues to staff, providing faster responses and reducing support workload.',
      example: 'Answers legal practice FAQs, scheduling consultations as needed.',
      icon: <MessageSquare className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Automated Client Onboarding',
      description: 'Sends welcome packets, contracts, and tracks document completion for consistent onboarding and professional first impressions.',
      example: 'Streamlines HVAC client agreements and system questionnaires.',
      icon: <UserPlus className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Social Media Content Scheduler',
      description: 'Generates and schedules posts, optimizing for engagement to maintain a consistent online presence with less manual effort.',
      example: 'Schedules weekly success stories for a marketing agency.',
      icon: <Share2 className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Employee Task Assignment and Tracking',
      description: 'Assigns tasks based on skills and availability, tracking progress to optimize workforce and ensure timely service delivery.',
      example: 'Assigns cleaning jobs based on proximity and expertise.',
      icon: <Users className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Feedback and Review Collection',
      description: 'Sends surveys post-service, prompting reviews from satisfied clients to enhance reputation and gain actionable insights.',
      example: 'Collects consulting feedback, nudging happy clients for Google reviews.',
      icon: <Star className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Document Processing and Data Extraction',
      description: 'Extracts data from documents, inputting it into systems automatically to reduce data entry and minimize errors.',
      example: 'Processes legal intake forms, populating case management systems.',
      icon: <FileText className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: 'Inventory and Supply Reordering',
      description: 'Tracks stock and reorders supplies based on usage patterns to prevent stockouts and save time.',
      example: 'Reorders HVAC parts when inventory runs low.',
      icon: <Package className="w-10 h-10 text-vp-pink group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-vp-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-vp-dark text-center mb-8 animate-on-load">
          VividPulse Default Automation Workflows
        </h2>
        <p className="text-xl text-vp-dark/80 text-center max-w-3xl mx-auto mb-12 animate-on-load leading-relaxed">
          Welcome to VividPulse, where we streamline your service business with cutting-edge automation. Below are the 10 default workflows included with your onboarding, designed to save time, boost efficiency, and grow your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 bg-vp-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-on-load border-2 border-transparent hover:border-gradient"
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-vp-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-vp-dark/80 text-lg leading-relaxed mb-4">{service.description}</p>
                <p className="text-vp-dark/60 text-base italic leading-relaxed">{service.example}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-on-load">
          <h3 className="text-3xl font-bold text-vp-dark mb-4">Get Started</h3>
          <p className="text-lg text-vp-dark/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            These workflows are fully customizable to your business. During onboarding, we’ll integrate them with your existing tools and provide a dashboard to track performance. Let VividPulse drive your business forward!
          </p>
          <Button
            className="bg-vp-pink text-vp-white hover:bg-vp-orange rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <a href="#contact-form">Contact Us</a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(to right, #ec0868, #c200fb) 1;
          border-width: 2px;
          border-style: solid;
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

export default Services;