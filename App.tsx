
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Language, Theme } from './types';
import { translations } from './i18n';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ValueProp from './components/ValueProp';
import TechnicalShowcase from './components/TechnicalShowcase';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import EmergencyCall from './components/EmergencyCall';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import PricingPackages from './components/PricingPackages';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

const App: React.FC = () => {
  // Initialize with defaults to avoid hydration mismatch
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage after mount
    const savedLang = localStorage.getItem('lang') as Language;
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedLang) setLang(savedLang);
    if (savedTheme) setTheme(savedTheme);
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isLoaded]);

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  // Prevent flicker or hydration issues by rendering a consistent initial UI
  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      <div className={`min-h-screen font-${lang === 'ar' ? 'cairo' : 'inter'} bg-slate-50 dark:bg-slate-950 transition-colors duration-300`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {/* Global Background 3D Elements */}
          <div className="bg-3d-shape from-blue-500 to-primary top-0 right-0 w-[500px] h-[500px] animate-pulse-soft"></div>
          <div className="bg-3d-shape from-orange-400 to-secondary bottom-0 left-0 w-[600px] h-[600px] animate-float"></div>
          
          <Hero />
          <ProblemSection />
          <ValueProp />
          <TechnicalShowcase />
          <Services />
          <EmergencyCall />
          <HowItWorks />
          <SocialProof />
          <PricingPackages />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
