import React from 'react';

const tags = [
  "Premium Drycleaning",
  "5-Star Laundry",
  "Carpet & Rug Cleaning",
  "Fumigation Services",
  "Fabric Restoration",
  "Pickup & Delivery",
  "Garment Repairs",
  "Upholstery Cleaning",
  "Eco-Friendly Solvents",
  "Same-Day Service",
];

export const Marquee: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brandRed-600 via-brandRed-500 to-brandRed-600 py-5 select-none">
      <div
        className="marquee-track"
        onTouchStart={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
        onTouchEnd={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
      >
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-white font-semibold text-sm uppercase tracking-[0.2em] whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0"></span>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
