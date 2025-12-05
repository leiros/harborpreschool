import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm border border-gray-100">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
          currentLang === 'en' ? 'bg-school-blue text-white' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('pt')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
          currentLang === 'pt' ? 'bg-school-green text-white' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => onLanguageChange('es')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
          currentLang === 'es' ? 'bg-school-yellow text-white' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        ES
      </button>
    </div>
  );
};