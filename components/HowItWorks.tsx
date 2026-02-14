
import React from 'react';
import { useApp } from '../App';
import { Search, Calendar, UserCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { t, lang } = useApp();

  const steps = [
    { 
        icon: Search, 
        title: lang === 'ar' ? 'اختار الخدمة' : 'Choose Service', 
        desc: lang === 'ar' ? 'حدد الخدمة اللي محتاجها وشوف أسعارنا الشفافة.' : 'Select the service you need and see our transparent pricing.'
    },
    { 
        icon: Calendar, 
        title: lang === 'ar' ? 'حدد ميعادك / طوارئ' : 'Schedule or Emergency', 
        desc: lang === 'ar' ? 'اختار الموعد اللي يناسبك أو اطلب طوارئ فورية.' : 'Pick a time that fits your schedule or request immediate help.'
    },
    { 
        icon: UserCheck, 
        title: lang === 'ar' ? 'فني معتمد يوصلك' : 'Certified Pro Arrives', 
        desc: lang === 'ar' ? 'فني محترف يوصلك في ميعاده ويصلح مشكلتك مع ضمان.' : 'A professional arrives on time, fixes your issue with a warranty.'
    },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] border-[50px] border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            {lang === 'ar' ? '3 خطوات وبس.. مشكلتك هتتحل' : '3 Simple Steps to Solve Your Issue'}
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">
            {lang === 'ar' ? 'بدون مكالمات كتير وبدون تضييع وقت. حجزك في ثواني.' : 'No long calls, no wasted time. Book in seconds.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-400 -translate-y-1/2 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mb-8 shadow-2xl relative">
                <step.icon size={36} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-black">
                    {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-blue-100">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
