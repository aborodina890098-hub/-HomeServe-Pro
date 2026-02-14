
import React from 'react';
import { useApp } from '../App';
import { ShieldCheck, Target, Zap, RotateCcw, CreditCard, Users, Headphones, BarChart } from 'lucide-react';

const ValueProp: React.FC = () => {
  const { t, lang } = useApp();

  const benefits = [
    { icon: ShieldCheck, title: t('value_1_title'), desc: t('value_1_desc'), color: 'bg-blue-500' },
    { icon: Target, title: t('value_2_title'), desc: t('value_2_desc'), color: 'bg-orange-500' },
    { icon: Zap, title: t('value_3_title'), desc: t('value_3_desc'), color: 'bg-yellow-500' },
    { icon: RotateCcw, title: t('value_4_title'), desc: t('value_4_desc'), color: 'bg-green-500' },
    { icon: Users, title: lang === 'ar' ? 'تقييمات حقيقية' : 'Real Ratings', desc: lang === 'ar' ? 'كل تقييم بتشوفه جاي من عميل حجز وجرب الخدمة فعلاً.' : 'Every rating you see comes from a customer who actually booked.', color: 'bg-purple-500' },
    { icon: CreditCard, title: lang === 'ar' ? 'دفع آمن' : 'Secure Payment', desc: lang === 'ar' ? 'ادفع كاش للفني أو أونلاين براحتك وبمنتهى الأمان.' : 'Pay cash to the pro or online securely, your choice.', color: 'bg-indigo-500' },
    { icon: Headphones, title: lang === 'ar' ? 'خدمة عملاء 24/7' : '24/7 Support', desc: lang === 'ar' ? 'فريق الدعم معاك قبل وأثناء وبعد انتهاء الخدمة.' : 'Support team is with you before, during, and after.', color: 'bg-pink-500' },
    { icon: BarChart, title: lang === 'ar' ? 'متابعة ما بعد الخدمة' : 'After-care Follow-up', desc: lang === 'ar' ? 'بنتأكد إنك راضي 100% عن كل تفصيلة في الصيانة.' : 'We ensure you are 100% satisfied with every detail.', color: 'bg-teal-500' },
  ];

  return (
    <section id="why" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">{t('value_title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {lang === 'ar' ? 'احنا مش مجرد وسيط، احنا شركاء في الحفاظ على بيتك في أحسن صورة.' : 'We are not just a middleman, we are partners in keeping your home at its best.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className={`${b.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                <b.icon size={28} />
              </div>
              <h3 className="text-xl font-black mb-3">{b.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
