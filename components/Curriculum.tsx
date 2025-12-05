import React from 'react';
import { ContentData } from '../types';

interface Props {
  data: ContentData['curriculum'];
}

const Curriculum: React.FC<Props> = ({ data }) => {
  return (
    <section id="curriculum" className="py-24 bg-softYellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((area, index) => {
            const Icon = area.icon;
            // Span the last item across 2 cols if on large screen to center it, or use flex tricks.
            // Let's keep a standard grid for simplicity and consistency.
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-transform hover:-translate-y-1 hover:shadow-xl border border-gray-100 bg-white`}
              >
                <div className={`w-16 h-16 rounded-2xl ${area.color} flex items-center justify-center mb-6`}>
                  <Icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary text-lg leading-none">•</span>
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;