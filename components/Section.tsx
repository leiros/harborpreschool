import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, bgColor = "bg-white" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};