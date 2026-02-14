
import React, { useState } from 'react';
import { useApp } from '../App';
import { Droplets, Zap, Wind, Brush, Hammer, Bug, Wrench, WashingMachine, Plus } from 'lucide-react';

const Services: React.FC = () => {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState<'all' | 'emergency' | 'maintenance' | 'cleaning'>('all');

  const services = [
    { id: 1, icon: Droplets, title: { ar: 'سباكة', en: 'Plumbing' }, price: '80', cat: 'emergency' },
    { id: 2, icon: Zap, title: { ar: 'كهرباء', en: 'Electrical' }, price: '100', cat: 'emergency' },
    { id: 3, icon: Wind, title: { ar: 'تكييف', en: 'AC Services' }, price: '150', cat: 'maintenance' },
    { id: 4, icon: Brush, title: { ar: 'تنظيف', en: 'Cleaning' }, price: '200', cat: 'cleaning' },
    { id: 5, icon: Hammer, title: { ar: 'نجارة', en: 'Carpentry' }, price: '90', cat: 'maintenance' },
    { id: 6, icon: Bug, title: { ar: 'مكافحة حشرات', en: 'Pest Control' }, price: '300', cat: 'cleaning' },
    { id: 7, icon: WashingMachine, title: { ar: 'صيانة غسالات', en: 'Appliance Repair' }, price: '120', cat: 'maintenance' },
    { id: 8, icon: Plus, title: { ar: 'تركيب سخان', en: 'Heater Install' }, price: '150', cat: 'emergency' },
  ];

  const filteredServices = filter === 'all' ? services : services.filter(s => s.cat === filter);

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black mb-4">{t('nav_services')}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              {lang === 'ar' ? 'أكثر من 15 خدمة متخصصة بأسعار تبدأ من 80 جنيه فقط.' : 'Over 15 specialized services starting from just 80 EGP.'}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['all', 'emergency', 'maintenance', 'cleaning'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {f === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : 
                 f === 'emergency' ? (lang === 'ar' ? 'طوارئ' : 'Emergency') :
                 f === 'maintenance' ? (lang === 'ar' ? 'صيانة' : 'Maintenance') :
                 (lang === 'ar' ? 'تنظيف' : 'Cleaning')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {filteredServices.map((s) => (
            <div key={s.id} className="group perspective-card bg-slate-50 dark:bg-slate-800/50 p-6 lg:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
              <div className="bg-white dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <s.icon size={32} />
              </div>
              <h3 className="text-lg lg:text-xl font-black mb-2">{lang === 'ar' ? s.title.ar : s.title.en}</h3>
              <p className="text-sm text-slate-500 mb-6">
                {lang === 'ar' ? 'أسعار تبدأ من' : 'Starting from'} 
                <span className="text-primary font-black mx-1">{s.price}</span> 
                {lang === 'ar' ? 'ج.م' : 'EGP'}
              </p>
              <a 
                href="#booking"
                className="w-full inline-block text-center py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                {lang === 'ar' ? 'احجز الخدمة' : 'Book Service'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
