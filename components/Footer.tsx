import React from 'react';

interface Props {
  text: string;
}

const Footer: React.FC<Props> = ({ text }) => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">{text}</p>
        <div className="mt-4 flex justify-center space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary cursor-pointer transition-colors"></div>
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-secondary cursor-pointer transition-colors"></div>
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-accent cursor-pointer transition-colors"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;