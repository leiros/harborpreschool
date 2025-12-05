import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language, CurriculumArea, Principle } from './types';
import { LanguageSelector } from './components/LanguageSelector';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { 
  Globe, Heart, Lightbulb, Sparkles, 
  Brain, Users, Palette, Activity, Sun,
  BookOpen, CheckCircle
} from 'lucide-react';

// Icon mapper helper
const getIcon = (name: string, size: number = 24, className: string = "") => {
  const props = { size, className };
  switch (name) {
    case 'Globe': return <Globe {...props} />;
    case 'Heart': return <Heart {...props} />;
    case 'Lightbulb': return <Lightbulb {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Brain': return <Brain {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'Sun': return <Sun {...props} />;
    default: return <BookOpen {...props} />;
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en'); // Default to English as requested
  const t = TRANSLATIONS[lang];

  return (
    <div className="font-sans antialiased text-gray-700 bg-gray-50 min-h-screen">
      <LanguageSelector currentLang={lang} onLanguageChange={setLang} />

      {/* 1. Hero Section */}
      <Hero title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* 2. Principles Section */}
      <Section bgColor="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-school-blue mb-4">{t.principles.sectionTitle}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{t.principles.intro}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.principles.items.map((item: Principle, idx: number) => (
            <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors border-l-8 border-school-blue shadow-sm">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-school-blue shadow-md">
                  {getIcon(item.iconName, 24)}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Pedagogical References */}
      <Section bgColor="bg-school-yellow/10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-school-yellow mb-4">{t.references.sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.references.items.map((ref, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-school-yellow/20 rounded-bl-full -mr-8 -mt-8"></div>
               <h3 className="font-display text-2xl font-bold text-gray-800 mb-4 border-b-2 border-school-yellow inline-block pb-1">
                 {ref.name}
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed italic">
                 "{ref.description}"
               </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Curriculum Structure */}
      <Section bgColor="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-school-green mb-6">{t.curriculum.sectionTitle}</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">{t.curriculum.intro}</p>
        </div>

        <div className="space-y-8">
          {t.curriculum.areas.map((area: CurriculumArea, idx: number) => (
            <div key={idx} className={`rounded-3xl p-6 md:p-8 border-2 ${area.color} transition-transform hover:-translate-y-1 duration-300`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <div className="p-4 bg-white rounded-2xl shadow-sm flex-shrink-0">
                    {getIcon(area.iconName, 40, "opacity-90")}
                 </div>
                 <div className="flex-1">
                   <h3 className="font-display text-2xl font-bold mb-4 opacity-90">{area.title}</h3>
                   <ul className="space-y-3">
                     {area.points.map((point, pIdx) => (
                       <li key={pIdx} className="flex items-start gap-3">
                         <span className="mt-1.5 w-2 h-2 rounded-full bg-current opacity-60 flex-shrink-0"></span>
                         <span className="opacity-80 leading-relaxed">{point}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Projects & Methodology */}
      <Section bgColor="bg-slate-900" className="text-white">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-bold text-school-purple mb-6">{t.projects.sectionTitle}</h2>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-purple-200">{t.projects.items.title}</h3>
              <ul className="space-y-6">
                {t.projects.items.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-school-purple flex items-center justify-center flex-shrink-0 font-bold text-white shadow-lg shadow-purple-900/50">
                      {idx + 1}
                    </div>
                    <p className="text-lg leading-relaxed text-gray-200">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full h-80 md:h-auto md:self-stretch min-h-[400px]">
             <img 
               src="https://picsum.photos/seed/projects/800/800" 
               alt="Project work" 
               className="w-full h-full object-cover rounded-3xl opacity-80 hover:opacity-100 transition-opacity" 
             />
          </div>
        </div>
      </Section>

      {/* 6. Evaluation */}
      <Section bgColor="bg-school-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-green-100 text-school-green mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-8">{t.evaluation.sectionTitle}</h2>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border-b-8 border-school-green">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">{t.evaluation.items.title}</h3>
            <div className="space-y-4 text-left">
              {t.evaluation.items.points.map((point, idx) => (
                <p key={idx} className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
             {/* Social placeholders */}
             <div className="w-10 h-10 bg-gray-700 rounded-full hover:bg-school-blue transition-colors cursor-pointer"></div>
             <div className="w-10 h-10 bg-gray-700 rounded-full hover:bg-school-purple transition-colors cursor-pointer"></div>
             <div className="w-10 h-10 bg-gray-700 rounded-full hover:bg-school-yellow transition-colors cursor-pointer"></div>
          </div>
          <p className="mb-2">{t.footer.contact}: school@example.com | (55) 1234-5678</p>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} School Name. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;