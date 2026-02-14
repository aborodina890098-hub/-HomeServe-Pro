
import React, { useState } from 'react';
import { useApp } from '../App';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';

const Navbar: React.FC = () => {
  const { lang, setLang, theme, setTheme, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav_home'), href: '#' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_why'), href: '#why' },
    { name: t('nav_pricing'), href: '#pricing' },
    { name: t('nav_faq'), href: '#faq' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
              <span className="text-white font-black text-xl italic">H</span>
            </div>
            <span className="text-xl font-black text-primary dark:text-white tracking-tight">
              HomeServe<span className="text-secondary">Pro</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-bold"
            >
              <Languages size={18} />
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <a
              href="#booking"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
            >
              {t('hero_cta_book')}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="p-2">
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-slide-up">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-700 dark:text-slate-200 border-b border-slate-50 dark:border-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center gap-4">
               <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-full justify-center font-bold"
                >
                  {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                </button>
            </div>
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-xl"
            >
              {t('hero_cta_book')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
