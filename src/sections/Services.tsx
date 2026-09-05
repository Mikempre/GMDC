import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';

export const Services: React.FC = () => {
  const services = [
    {
      title: "5-Star Laundry & Drycleaning",
      description: "Premium care for your everyday and delicate garments, using eco-friendly solvents and state-of-the-art equipment to keep you looking dazzling.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      )
    },
    {
      title: "Carpets, Rugs & Upholstery Cleaning",
      description: "Extend our fabricare expertise to your home. We meticulously revitalize your carpets, rugs, and delicate upholstery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      )
    },
    {
      title: "Garment Repairs & Alteration",
      description: "From simple hems and button replacements to complex tailoring. Our master tailors ensure the perfect fit every time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>
      )
    },
    {
      title: "Fabric Protect & Restoration",
      description: "Preserve and protect your cherished items. We specialize in restoring the supple texture, rich color, and integrity of aged fabrics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      )
    },
    {
      title: "Fumigation & Pest Control",
      description: "Keep your environment safe and pest-free with our professional fumigation services, tailored for both residential and commercial spaces.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      )
    },
    {
      title: "Specialized Cleaning Services",
      description: "Comprehensive cleaning solutions for unique needs. From dirty to dazzling, you are completely sorted!",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
      )
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-[#081630] relative transition-colors duration-500 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brandRed-50 dark:bg-brandRed-900/10 blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-navy-100 dark:bg-navy-900/20 blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="Comprehensive garment care tailored to your specific needs. We treat every fabric with the specialized attention it deserves."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-20">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.15}s` }}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
