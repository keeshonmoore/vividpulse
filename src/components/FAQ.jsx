import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

function FAQ() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('animate-scale-fade');
      });
    }
  }, []);

  // Sample FAQs (replace with your own)
  const faqs = [
    {
      question: 'What is VividPulse, and how does it help my business?',
      answer: 'VividPulse provides AI-driven automation workflows to streamline your service business. Our 10 default workflows, like lead qualification and appointment scheduling, save time, reduce errors, and boost efficiency, all customizable to your needs.',
    },
    {
      question: 'How does onboarding with VividPulse work?',
      answer: 'During onboarding, we integrate our workflows with your existing tools (e.g., CRM, calendar) and tailor them to your business. You’ll receive a dashboard to track performance and ongoing support to ensure success.',
    },
    {
      question: 'Can I customize the automation workflows?',
      answer: 'Yes, all workflows are fully customizable. We work with you to adjust triggers, actions, and integrations to match your business processes, ensuring a perfect fit.',
    },
    {
      question: 'What kind of support does VividPulse offer?',
      answer: 'We provide 24/7 customer support via email, chat, and phone, with priority response times based on your plan. Our team is here to assist with setup, troubleshooting, and optimization.',
    },
    {
      question: 'How do I get started with VividPulse?',
      answer: 'Contact us to schedule a demo or start onboarding. We’ll guide you through selecting a plan (Starter, Growth, or Enterprise) and setting up your workflows to drive immediate results.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-vp-white"
    >
      <div className="px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-vp-dark text-center mb-12 animate-on-load">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="animate-on-load">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-vp-white/80 backdrop-blur-sm rounded-2xl mb-4 p-4 transition-all duration-300 hover:border-gradient"
              >
                <AccordionTrigger className="text-xl font-semibold text-vp-dark hover:text-vp-pink transition-colors">
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-5 h-5 text-vp-pink group-hover:scale-110 transition-transform duration-300" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-vp-dark/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default FAQ;