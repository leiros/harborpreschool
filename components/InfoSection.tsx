import React from 'react';
import { Rocket, ClipboardCheck } from 'lucide-react';

interface Props {
  id: string;
  title: string;
  items: string[];
  type: 'projects' | 'assessment';
}

const InfoSection: React.FC<Props> = ({ id, title, items, type }) => {
  const isProject = type === 'projects';
  const bgColor = isProject ? 'bg-white' : 'bg-secondary';
  const textColor = isProject ? 'text-gray-900' : 'text-white';
  const itemBg = isProject ? 'bg-softPink' : 'bg-white/10';
  const Icon = isProject ? Rocket : ClipboardCheck;

  return (
    <section id={id} className={`py-20 ${bgColor} transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className={`p-4 rounded-full mb-4 ${isProject ? 'bg-orange-100 text-orange-500' : 'bg-white/20 text-white'}`}>
             <Icon size={40} />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor} text-center`}>{title}</h2>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${itemBg} ${isProject ? 'border-l-4 border-primary' : 'border-l-4 border-accent'} shadow-sm`}
            >
              <p className={`text-lg ${isProject ? 'text-gray-700' : 'text-white/90'}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;