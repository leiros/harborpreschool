import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Principles from './components/Principles';
import References from './components/References';
import Curriculum from './components/Curriculum';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { APP_CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  // English is default as per requirements
  const [language, setLanguage] = useState<Language>(Language.EN);
  const content = APP_CONTENT[language];

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 selection:bg-primary selection:text-white">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        content={content.nav}
      />

      <main>
        <HeroCarousel
          title={content.hero.title}
          subtitle={content.hero.subtitle}
        />

        <Principles data={content.principles} />

        <References data={content.references} />

        <Curriculum data={content.curriculum} />

        <InfoSection
          id="projects"
          type="projects"
          title={content.projects.sectionTitle}
          items={content.projects.items}
        />

        <InfoSection
          id="assessment"
          type="assessment"
          title={content.assessment.sectionTitle}
          items={content.assessment.items}
        />
      </main>

      <Footer text={content.footer.text} />
    </div>
  );
};

export default App;