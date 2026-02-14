
import React from 'react';
import { useApp } from '../App';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const { lang } = useApp();

  const features = [
    { name: lang === 'ar' ? 'تسعير ثابت ومسبق' : 'Fixed Upfront Pricing', pro: true, casual: false },
    { name: lang === 'ar' ? 'ضمان حقيقي 30 يوم' : '30-Day Warranty', pro: true, casual: false },
    { name: lang === 'ar' ? 'فحص خلفية الفنيين' : 'Technician Background Check', pro: true, casual: false },
    { name: lang === 'ar' ? 'خدمة عملاء طوال اليوم' : '24/7 Customer Support', pro: true, casual: false },
    { name: lang === 'ar' ? 'متابعة ما بعد الخدمة' : 'Post-service Follow-up', pro: true, casual: false },
    { name: lang === 'ar' ? 'دفع إلكتروني وفواتير' : 'E-payments & Invoices', pro: true, casual: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            {lang === 'ar' ? 'شفافية كاملة في الأسعار' : 'Full Pricing Transparency'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {lang === 'ar' ? 'قارن بين جودة HomeServe Pro وبين الفنيين العاديين.' : 'Compare HomeServe Pro quality with casual technicians.'}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
          <table className="w-full text-right rtl:text-right ltr:text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="p-6 lg:p-8 text-xl font-black border-b border-slate-100 dark:border-slate-700">المميزات</th>
                <th className="p-6 lg:p-8 text-xl font-black text-primary text-center border-b border-slate-100 dark:border-slate-700">HomeServe Pro</th>
                <th className="p-6 lg:p-8 text-xl font-black text-slate-400 text-center border-b border-slate-100 dark:border-slate-700">فني "يومية"</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <td className="p-6 lg:px-8 font-bold border-b border-slate-100 dark:border-slate-700">{f.name}</td>
                  <td className="p-6 text-center border-b border-slate-100 dark:border-slate-700">
                    <Check className="mx-auto text-accent" size={28} />
                  </td>
                  <td className="p-6 text-center border-b border-slate-100 dark:border-slate-700">
                    <X className="mx-auto text-red-400" size={28} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 max-w-2xl mx-auto italic">
                {lang === 'ar' 
                    ? '* السعر النهائي بيعتمد على حجم المشكلة وقطع الغيار المطلوبة، لكن المصنعية ثابتة ومعروفة مسبقاً.' 
                    : '* Final price depends on issue scope and spare parts, but labor fees are fixed and known upfront.'}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
