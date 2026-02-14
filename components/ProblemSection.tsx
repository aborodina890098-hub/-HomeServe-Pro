
import React from 'react';
import { useApp } from '../App';
import { AlertCircle, Clock, DollarSign, ShieldX, Ghost, PhoneOff, CalendarOff } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const { t, lang } = useApp();

  const painPoints = [
    { icon: Ghost, text: t('problem_1'), color: 'text-red-500' },
    { icon: DollarSign, text: t('problem_2'), color: 'text-orange-500' },
    { icon: Clock, text: t('problem_3'), color: 'text-yellow-500' },
    { icon: ShieldX, text: t('problem_4'), color: 'text-blue-500' },
    { icon: AlertCircle, text: t('problem_5'), color: 'text-purple-500' },
    { icon: PhoneOff, text: t('problem_6'), color: 'text-pink-500' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">{t('problem_title')}</h2>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-all hover:shadow-xl"
            >
              <div className={`${point.color} mb-6 p-4 bg-white dark:bg-slate-900 rounded-2xl w-fit shadow-sm transform group-hover:rotate-12 transition-transform`}>
                <point.icon size={32} />
              </div>
              <p className="text-xl font-bold leading-snug">{point.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/30 text-center max-w-4xl mx-auto">
            <p className="text-red-700 dark:text-red-400 font-bold text-lg">
                {lang === 'ar' ? 'إحراج الاتصال بأرقام عشوائية وقلق الجودة انتهى للأبد.' : 'No more awkward calls to random numbers or worrying about quality.'}
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
