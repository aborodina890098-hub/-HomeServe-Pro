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
  const [hasMounted, setHasMounted] = useState(false);
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // التأكد من أن الكود يعمل داخل المتصفح فقط
    setHasMounted(true);
    
    try {
      const storage = typeof window !== 'undefined' ? window.localStorage : null;
      if (storage) {
        const savedLang = storage.getItem('lang') as Language;
        const savedTheme = storage.getItem('theme') as Theme;
        if (savedLang) setLang(savedLang);
        if (savedTheme) setTheme(savedTheme);
      }
    } catch (e) {
      console.warn("Storage access blocked by browser settings.");
    }
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    } catch (e) {}
  }, [lang, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  }, [theme, hasMounted]);

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  // حماية الشاشة البيضاء: إذا لم يتم "تثبيت" المكون بعد، لا ترسم شيئاً معقداً
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      <div className={`min-h-screen font-${lang === 'ar' ? 'cairo' : 'inter'} bg-slate-50 dark:bg-slate-950 transition-colors duration-300`}>
        <Navbar />
        <main className="relative overflow-hidden">
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