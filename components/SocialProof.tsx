
import React, { useEffect, useState } from 'react';
import { useApp } from '../App';
import { Star, CheckCircle2 } from 'lucide-react';

const SocialProof: React.FC = () => {
  const { t, lang } = useApp();
  const [counts, setCounts] = useState({ services: 0, rating: 0, speed: 0, warranty: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        services: prev.services < 50000 ? prev.services + 1234 : 50000,
        rating: 4.8,
        speed: 30,
        warranty: 30
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: 'أحمد سعيد', area: 'المعادي', text: 'بجد خدمة ممتازة، الفني وصل في ميعاده بالظبط وكان لابس اليونيفورم ومعاه كل العدة. السباكة اتصلحت في نص ساعة.', stars: 5 },
    { name: 'سارة محمود', area: 'الشيخ زايد', text: 'أول مرة أحس إن الفني مش بيستغلني في السعر. السعر كان معروف من قبل ما ييجي وفيه فاتورة وضمان.', stars: 5 },
    { name: 'محمود ابراهيم', area: 'التجمع الخامس', text: 'حجزت طوارئ للكهرباء الفجر، الفني كان عندي في 20 دقيقة فعلاً. احترافية مش موجودة في حتة تانية.', stars: 4.9 },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem]">
            <p className="text-4xl lg:text-5xl font-black text-primary mb-2">+{counts.services.toLocaleString()}</p>
            <p className="text-slate-600 dark:text-slate-400 font-bold">{t('stat_completed')}</p>
          </div>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem]">
            <p className="text-4xl lg:text-5xl font-black text-secondary mb-2">{counts.rating}/5</p>
            <p className="text-slate-600 dark:text-slate-400 font-bold">{t('stat_rating')}</p>
          </div>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem]">
            <p className="text-4xl lg:text-5xl font-black text-accent mb-2">{counts.speed}</p>
            <p className="text-slate-600 dark:text-slate-400 font-bold">{t('stat_speed')}</p>
          </div>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem]">
            <p className="text-4xl lg:text-5xl font-black text-blue-500 mb-2">{counts.warranty}</p>
            <p className="text-slate-600 dark:text-slate-400 font-bold">{t('stat_warranty')}</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            {lang === 'ar' ? 'عملائنا بيتكلموا عننا' : 'What Our Customers Say'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-lg relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black">
                    {t.name[0]}
                </div>
                <div>
                  <p className="font-black">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.area} - <span className="text-accent font-bold">عميل موثق <CheckCircle2 size={12} className="inline" /></span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
