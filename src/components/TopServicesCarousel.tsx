import React, { useEffect, useRef, useState } from 'react';
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

const carouselItems = [
  { id: 1, title: 'Drycleaning Services', image: imgDryCleaning, link: '#services' },
  { id: 2, title: 'Laundry Services', image: imgLaundry, link: '#services' },
  { id: 3, title: 'Pressing', image: imgIroning, link: '#services' },
  { id: 4, title: 'Stain & Spot Treatment', image: imgStain, link: '#services' },
  { id: 5, title: 'Household Textile Cleaning', image: imgHousehold, link: '#services' },
  { id: 6, title: 'Shoe & Bag Care', image: imgShoes, link: '#services' },
  { id: 7, title: 'Specialised Garment Care', image: imgSpecialty, link: '#services' },
  { id: 8, title: 'Commercial Laundry', image: imgCommercial, link: '#services' },
  { id: 9, title: 'Pick-up & Delivery', image: imgDelivery, link: '#services' },
  { id: 10, title: 'Express Service', image: imgExpress, link: '#services' },
];

export const TopServicesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const step = 1; // pixels per frame
    const scrollSpeed = 20; // ms per frame

    const scrollInterval = setInterval(() => {
      if (container && !isHovered) {
        let currentScroll = container.scrollLeft;
        currentScroll += step;
        
        if (currentScroll >= container.scrollWidth / 2) {
          // Reset to beginning for infinite effect
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = currentScroll;
        }
      }
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  // Double the items to allow seamless infinite scrolling
  const infiniteItems = [...carouselItems, ...carouselItems];

  return (
    <div className="w-full bg-white dark:bg-[#041333] pt-40 md:pt-48 pb-4 overflow-hidden shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h3 className="text-xl font-serif font-bold text-brandBlue-900 dark:text-white">Our Services</h3>
      </div>
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className="flex gap-4 overflow-x-auto whitespace-nowrap px-4 sm:px-6 lg:px-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: 'auto' }}
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
              src={item.image} 
              alt={item.title} 
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
  );
};
