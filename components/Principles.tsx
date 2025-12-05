import React from 'react';
import { Globe, Heart, Sparkles, Sprout } from 'lucide-react';
import { ContentData } from '../types';

interface Props {
  data: ContentData['principles'];
}

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  heart: Heart,
  sparkles: Sparkles,
  sprout: Sprout
};

const Principles: React.FC<Props> = ({ data }) => {
  return (
    <section id="principles" className="py-20 bg-softBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-secondary"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary mx-auto">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Principles;