import React from 'react';
import imgDryCleaning from '../assets/services/drycleaning.webp';
import imgDryCleaningSm from '../assets/services/drycleaning-sm.webp';
import imgLaundry from '../assets/services/laundry.webp';
import imgLaundrySm from '../assets/services/laundry-sm.webp';
import imgIroning from '../assets/services/ironing.webp';
import imgIroningSm from '../assets/services/ironing-sm.webp';
import imgStain from '../assets/services/stain.webp';
import imgStainSm from '../assets/services/stain-sm.webp';
import imgHousehold from '../assets/services/household.webp';
import imgHouseholdSm from '../assets/services/household-sm.webp';
import imgShoes from '../assets/services/shoes.webp';
import imgShoesSm from '../assets/services/shoes-sm.webp';
import imgSpecialty from '../assets/services/specialty.webp';
import imgSpecialtySm from '../assets/services/specialty-sm.webp';
import imgCommercial from '../assets/services/commercial.webp';
import imgCommercialSm from '../assets/services/commercial-sm.webp';
import imgDelivery from '../assets/services/delivery.webp';
import imgDeliverySm from '../assets/services/delivery-sm.webp';
import imgExpress from '../assets/services/express.webp';
import imgExpressSm from '../assets/services/express-sm.webp';

const carouselItems = [
  { id: 1, title: 'Drycleaning Services', image: imgDryCleaning, imageSm: imgDryCleaningSm, link: '#services' },
  { id: 2, title: 'Laundry Services', image: imgLaundry, imageSm: imgLaundrySm, link: '#services' },
  { id: 3, title: 'Pressing', image: imgIroning, imageSm: imgIroningSm, link: '#services' },
  { id: 4, title: 'Stain & Spot Treatment', image: imgStain, imageSm: imgStainSm, link: '#services' },
  { id: 5, title: 'Household Textile Cleaning', image: imgHousehold, imageSm: imgHouseholdSm, link: '#services' },
  { id: 6, title: 'Shoe & Bag Care', image: imgShoes, imageSm: imgShoesSm, link: '#services' },
  { id: 7, title: 'Specialised Garment Care', image: imgSpecialty, imageSm: imgSpecialtySm, link: '#services' },
  { id: 8, title: 'Commercial Laundry', image: imgCommercial, imageSm: imgCommercialSm, link: '#services' },
  { id: 9, title: 'Pick-up & Delivery', image: imgDelivery, imageSm: imgDeliverySm, link: '#services' },
  { id: 10, title: 'Express Service', image: imgExpress, imageSm: imgExpressSm, link: '#services' },
];

export const TopServicesCarousel: React.FC = () => {
  // Double the items for seamless GPU-accelerated infinite animation
  const infiniteItems = [...carouselItems, ...carouselItems];

  return (
    <div className="w-full bg-white dark:bg-[#041333] pt-40 md:pt-48 pb-4 overflow-hidden shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h3 className="text-xl font-serif font-bold text-brandBlue-900 dark:text-white">Our Services</h3>
      </div>
      <div className="w-full overflow-hidden select-none">
        <div 
          className="carousel-track flex gap-4 px-4 pb-4"
          onTouchStart={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
          onTouchEnd={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
        >
          {infiniteItems.map((item, index) => (
            <a 
              key={`${item.id}-${index}`}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48 rounded-xl overflow-hidden group block shadow-lg cursor-pointer"
            >
              <img 
                src={item.imageSm}
                srcSet={`${item.imageSm} 360w, ${item.image} 640w`}
                sizes="(max-width: 640px) 256px, 320px"
                alt={`${item.title} - Gran Maestro Drycleaners Ibadan`}
                width="320"
                height="192"
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h4 className="text-white text-lg font-bold font-serif shadow-sm group-hover:text-brandBlue-300 transition-colors">
                  {item.title}
                </h4>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
