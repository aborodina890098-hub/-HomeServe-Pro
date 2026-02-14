
import React, { useState } from 'react';
import { useApp } from '../App';
import { ShieldCheck, Zap, Smartphone, Wrench, Hammer, Settings, Trophy, ShieldAlert, Star } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/whatsapp';
import { BookingFormData } from '../types';

const Hero: React.FC = () => {
  const { t, lang } = useApp();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    city: 'القاهرة',
    service: 'سباكة',
    isEmergency: false,
    preferredTime: 'في أسرع وقت',
    details: '',
    paymentMethod: 'cash',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
        alert(lang === 'ar' ? 'برجاء إدخال الاسم ورقم الهاتف' : 'Please enter your name and phone');
        return;
    }
    const link = buildWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden perspective-3d">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]"></div>
        
        {/* Floating 3D Tool Icons */}
        <div className="absolute top-20 right-[15%] animate-float opacity-40">
           <Wrench size={80} className="text-primary rotate-12 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 left-[10%] animate-float-delayed opacity-30">
           <Hammer size={60} className="text-secondary -rotate-45 drop-shadow-2xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up z-10">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700 shadow-xl">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <span className="text-slate-800 dark:text-slate-200 text-sm font-black">
                {lang === 'ar' ? 'اختيار أكثر من 50 ألف منزل في مصر' : 'Trusted by 50k+ homes in Egypt'}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 dark:text-white">
              {t('hero_title')}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {t('hero_subtitle')}
            </p>

            {/* Technician Image and Badge */}
            <div className="flex items-center gap-6 py-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop" 
                    alt="Technician" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent text-white p-1.5 rounded-full border-2 border-white dark:border-slate-800">
                  <ShieldCheck size={16} />
                </div>
              </div>
              <div>
                <p className="font-black text-lg">{lang === 'ar' ? 'فنيين معتمدين ١٠٠٪' : '100% Certified Pros'}</p>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-slate-500 text-xs ml-2">(4.9/5)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#booking" className="flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                <Smartphone size={24} />
                {t('hero_cta_book')}
              </a>
              <a href="#services" className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-10 py-5 rounded-2xl font-black text-xl hover:border-primary transition-all">
                {lang === 'ar' ? 'استكشف الخدمات' : 'Explore Services'}
              </a>
            </div>
          </div>

          {/* 3D Visual Section */}
          <div className="relative perspective-3d flex justify-center lg:justify-end">
            {/* The main 3D Card-style Form */}
            <div className="card-3d relative bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 w-full max-w-lg z-20">
               <div className="inner-3d">
                  <h2 className="text-3xl font-black mb-8 text-center text-primary">{t('form_title')}</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <input 
                          type="text" 
                          required
                          placeholder={t('form_name')}
                          className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-4 rounded-2xl outline-none focus:border-primary transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                          type="tel" 
                          required
                          placeholder={t('form_phone')}
                          className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-4 rounded-2xl outline-none focus:border-primary transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <select 
                          className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-4 rounded-2xl outline-none focus:border-primary transition-all"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option>سباكة</option>
                          <option>كهرباء</option>
                          <option>تكييف</option>
                          <option>تنظيف</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-3 bg-orange-50 dark:bg-orange-900/10 p-4 rounded-2xl border-2 border-orange-100 dark:border-orange-800/30">
                      <input 
                        type="checkbox" 
                        id="emergency-hero" 
                        className="w-6 h-6 accent-secondary"
                        checked={formData.isEmergency}
                        onChange={(e) => setFormData({...formData, isEmergency: e.target.checked})}
                      />
                      <label htmlFor="emergency-hero" className="text-sm font-black text-secondary">{t('form_emergency')}</label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-xl"
                    >
                      <Zap size={24} />
                      {t('form_submit')}
                    </button>
                  </form>
               </div>
            </div>

            {/* Floating Technician Image Component */}
            <div className="absolute -bottom-10 -left-10 lg:-left-20 hidden md:block z-30 animate-float">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-[2rem] shadow-3xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-primary">
                        <Wrench size={32} />
                     </div>
                     <div>
                        <p className="text-xs font-black uppercase tracking-tighter text-slate-400">{lang === 'ar' ? 'زيارة نشطة' : 'Active Visit'}</p>
                        <p className="font-black text-slate-800 dark:text-white">{lang === 'ar' ? 'إصلاح عطل تكييف' : 'AC Repair in progress'}</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
