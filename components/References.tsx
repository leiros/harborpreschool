import React from 'react';
import { ContentData } from '../types';

interface Props {
  data: ContentData['references'];
}

const References: React.FC<Props> = ({ data }) => {
  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {data.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Reggio Emilia */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 group">
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg relative h-64">
              <img
                src="https://picsum.photos/id/106/600/400"
                alt="Reggio Emilia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-3">{data.items[0].name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {data.items[0].description}
              </p>
            </div>
          </div>

          {/* Emmi Pikler */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 group">
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg relative h-64">
              <img
                src="https://picsum.photos/id/225/600/400"
                alt="Emmi Pikler"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h3 className="text-2xl font-bold text-secondary mb-3">{data.items[1].name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {data.items[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;