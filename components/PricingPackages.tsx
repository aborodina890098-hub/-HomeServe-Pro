
import React from 'react';
import { useApp } from '../App';
// Added Settings to the import list
import { Check, Star, Zap, Shield, Crown, Settings } from 'lucide-react';

const PricingPackages: React.FC = () => {
  const { t, lang } = useApp();

  const plans = [
    {
      name: t('pkg_basic_name'),
      price: lang === 'ar' ? '٩٩' : '99',
      period: lang === 'ar' ? 'لكل زيارة' : 'per visit',
      icon: Zap,
      color: 'blue',
      features: [
        t('pkg_feature_warranty'),
        t('pkg_feature_emergency'),
        lang === 'ar' ? 'فني معتمد' : 'Certified Technician',
        lang === 'ar' ? 'دعم واتساب' : 'WhatsApp Support',
      ],
      popular: false,
    },
    {
      name: t('pkg_plus_name'),
      price: lang === 'ar' ? '٢٩٩' : '299',
      period: lang === 'ar' ? 'سنوياً' : 'yearly',
      icon: Shield,
      color: 'orange',
      features: [
        t('pkg_feature_warranty'),
        t('pkg_feature_emergency'),
        t('pkg_feature_discount'),
        t('pkg_feature_priority'),
        lang === 'ar' ? 'زيارتين صيانة مجانية' : '2 Free Maintenance Visits',
      ],
      popular: true,
    },
    {
      name: t('pkg_vip_name'),
      price: lang === 'ar' ? '٥٩٩' : '599',
      period: lang === 'ar' ? 'سنوياً' : 'yearly',
      icon: Crown,
      color: 'green',
      features: [
        lang === 'ar' ? 'ضمان ممتد ٦٠ يوم' : '60-Day Extended Warranty',
        t('pkg_feature_emergency'),
        lang === 'ar' ? 'خصم ٢٥٪ على قطع الغيار' : '25% Discount on Parts',
        lang === 'ar' ? '٤ زيارات صيانة دورية' : '4 Periodic Visits',
        lang === 'ar' ? 'فني VIP مخصص' : 'Dedicated VIP Pro',
        lang === 'ar' ? 'تقارير فنية شهرية' : 'Monthly Tech Reports',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing-packages" className="py-32 bg-slate-50 dark:bg-slate-950 perspective-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
             {t('pkg_title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            {t('pkg_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch lg:px-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`card-3d relative flex flex-col p-8 lg:p-10 rounded-[3.5rem] transition-all duration-700 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary via-blue-800 to-indigo-900 text-white shadow-3xl scale-105 z-20 border-t-8 border-secondary'
                  : 'bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-orange-500 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl flex items-center gap-2 whitespace-nowrap z-30">
                  <Star size={20} fill="white" className="animate-spin-slow" />
                  {lang === 'ar' ? 'الخيار الأفضل للبيوت الذكية' : 'Best Choice for Smart Homes'}
                </div>
              )}

              <div className="mb-10 inner-3d">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl ${
                  plan.popular ? 'bg-white/10 text-white rotate-6' : 'bg-primary/5 text-primary -rotate-6'
                }`}>
                  <plan.icon size={44} />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <div className="flex flex-col">
                     <span className={`text-sm font-black uppercase tracking-widest ${plan.popular ? 'text-blue-200' : 'text-slate-500'}`}>
                        {lang === 'ar' ? 'ج.م' : 'EGP'}
                     </span>
                     <span className={`text-xs font-bold opacity-60 ${plan.popular ? 'text-blue-100' : 'text-slate-400'}`}>
                        / {plan.period}
                     </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow inner-3d">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1 shadow-inner ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
                    }`}>
                      <Check size={16} strokeWidth={4} />
                    </div>
                    <span className={`text-lg font-bold leading-tight ${plan.popular ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-6 rounded-[2rem] font-black text-xl transition-all transform hover:translate-y-[-8px] active:scale-95 shadow-2xl inner-3d ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-secondary hover:text-white glow-secondary'
                    : 'bg-primary text-white hover:bg-blue-700 glow-primary'
                }`}
                onClick={() => window.open(`https://wa.me/201210285859?text=مهتم بالاشتراك في ${plan.name} - HomeServe Pro`, '_blank')}
              >
                {t('pkg_cta')}
              </button>
            </div>
          ))}
        </div>
        
        {/* Floating Tool icons decoration */}
        <div className="absolute top-10 right-10 hidden lg:block opacity-10 rotate-45 animate-float">
           <Settings size={120} />
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
