import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';

import imgDryCleaning from '../assets/services/drycleaning.jpg';
import imgLaundry from '../assets/services/laundry.jpg';
import imgIroning from '../assets/services/ironing.jpg';
import imgStain from '../assets/services/stain.jpg';
import imgHousehold from '../assets/services/household.jpg';
import imgShoes from '../assets/services/shoes.jpg';
import imgSpecialty from '../assets/services/specialty.jpg';
import imgCommercial from '../assets/services/commercial.jpg';
import imgDelivery from '../assets/services/delivery.jpg';
import imgExpress from '../assets/services/express.jpg';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Drycleaning Services",
      description: "Professional drycleaning for garments that require special care, including:",
      bullets: ["Suits & Corporate Wear", "Native & Traditional Outfits", "Dresses & Gowns", "Lace & Delicate Fabrics", "Silk & Wool Garments", "Jackets & Coats", "Designer & Special-Occasion Wear", "Wedding & Event Outfits"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      ),
      image: imgDryCleaning
    },
    {
      title: "Laundry Services",
      description: "Quality washing and fabric care for everyday garments and suitable textiles:",
      bullets: ["Wash & Fold", "Wash & Iron", "Premium Laundry Care", "Shirts & T-Shirts", "Trousers & Jeans", "Native Wear", "Children's Wear", "Household Linen"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
      ),
      image: imgLaundry
    },
    {
      title: "Pressing Services",
      description: "Professional finishing to give your clothes a neat, crisp and presentable appearance:",
      bullets: ["Steam Pressing", "Premium Ironing", "Garment Finishing", "Starching", "Special Fabric Pressing"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      ),
      image: imgIroning
    },
    {
      title: "Stain & Spot Treatment",
      description: "Specialised treatment for difficult stains and spots, subject to fabric type, age of stain and garment condition.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
      ),
      image: imgStain
    },
    {
      title: "Household Textile Cleaning",
      description: "Professional cleaning for selected household fabrics and large items:",
      bullets: ["Curtains", "Carpets & Rugs", "Blankets", "Duvets", "Bedspreads", "Cushions & Throws"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      ),
      image: imgHousehold
    },
    {
      title: "Shoe & Bag Care",
      description: "Specialised cleaning and care for:",
      bullets: ["Shoes", "Sneakers", "Handbags", "Leather Bags", "Selected Leather Items"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      ),
      image: imgShoes
    },
    {
      title: "Specialised Garment Care",
      description: "Careful handling of high-value and delicate garments, including:",
      bullets: ["Beaded & Embellished Outfits", "Sequined Garments", "Designer Wear", "Luxury Fabrics", "Wedding & Occasion Wear"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      ),
      image: imgSpecialty
    },
    {
      title: "Commercial Laundry Services",
      description: "Reliable laundry and garment-care solutions for businesses and organisations, including:",
      bullets: ["Hotels", "Restaurants", "Offices", "Salons & Spas", "Short-Let Apartments", "Corporate Organisations"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
      ),
      image: imgCommercial
    },
    {
      title: "Pick-up & Delivery",
      description: "Convenient customer pick-up and delivery services for orders, subject to applicable location and delivery arrangements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
      ),
      image: imgDelivery
    },
    {
      title: "Express Service",
      description: "Fast-track cleaning and finishing for customers who require urgent service, subject to garment type, service required and operational capacity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      image: imgExpress
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-[#061c47] relative transition-colors duration-500 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brandBlue-50 dark:bg-brandBlue-900/10 blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-brandBlue-100 dark:bg-brandBlue-900/20 blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="Comprehensive garment care tailored to your specific needs. We treat every fabric with the specialized attention it deserves."
        />
        
        <div className="mt-20">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-10 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {services.map((service, index) => (
              <div key={index} className="snap-center w-[85vw] max-w-[350px] flex-shrink-0 md:w-auto md:max-w-none md:flex-shrink animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.15}s` }}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  bullets={service.bullets}
                  icon={service.icon}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
