
import React from 'react';
import { useApp } from '../App';
import { Wrench, Zap, ShieldCheck, Box, Activity, Cpu, Sparkles, Droplet, Lightbulb } from 'lucide-react';

const TechnicalShowcase: React.FC = () => {
  const { t, lang } = useApp();

  return (
    <section className="py-40 bg-slate-950 text-white overflow-visible perspective-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-32 animate-slide-up">
           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full mb-6">
              <Sparkles className="text-blue-400 animate-pulse" size={20} />
              <span className="text-sm font-black tracking-widest uppercase text-blue-300">
                {lang === 'ar' ? 'تكنولوجيا الصيانة الحديثة' : 'Modern Maintenance Tech'}
              </span>
           </div>
           <h2 className="text-6xl lg:text-8xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500 leading-[1.1]">
             {t('showcase_title')}
           </h2>
           <p className="text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto font-bold leading-relaxed">
             {t('showcase_subtitle')}
           </p>
        </div>

        {/* Huge 3D Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          
          {/* Massive Card 1: Plumbing (Smart Leak-Free) */}
          <div className="group relative card-3d h-[750px] lg:h-[950px] rounded-[5rem] border-4 border-white/10 shadow-3xl bg-slate-900 transition-all duration-1000 no-clip">
             
             {/* 3D Background Visual */}
             <div className="absolute inset-0 rounded-[4.8rem] overflow-hidden z-0">
                <img 
                  src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern Plumbing Tech" 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                {/* Visual Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] group-hover:bg-blue-600/40 transition-all duration-700"></div>
             </div>

             {/* Content Overlay */}
             <div className="relative p-12 lg:p-16 z-10 flex flex-col h-full justify-end inner-3d">
                
                {/* Floating Icon Holder */}
                <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center shadow-4xl mb-8 group-hover:rotate-12 transition-transform border-4 border-white/10">
                   <Droplet size={48} className="text-white fill-white/20" />
                </div>

                <h3 className="text-5xl lg:text-7xl font-black mb-6 leading-none tracking-tighter text-white">
                   {t('showcase_card_1')}
                </h3>
                
                <p className="text-xl lg:text-2xl text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
                   {lang === 'ar' 
                     ? 'أنظمة ذكية للكشف عن التسريبات بالموجات فوق الصوتية، نضمن لك بيتاً جافاً وآمناً للأبد.' 
                     : 'Smart ultrasonic leak detection systems, ensuring a dry and safe home forever.'}
                </p>

                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/5 backdrop-blur-3xl px-8 py-5 rounded-[2rem] border border-white/10 flex items-center gap-4 shadow-2xl">
                      <ShieldCheck className="text-accent" size={32} />
                      <span className="font-black text-xl">{t('pkg_feature_warranty')}</span>
                   </div>
                </div>
             </div>

             {/* 3D Pop-out "Pipe" Element (Visual Deco) */}
             <div className="absolute top-20 right-[-30px] z-20 animate-float opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="bg-gradient-to-br from-blue-400 to-primary p-12 rounded-[4rem] shadow-4xl border-4 border-white/20 transform -rotate-12">
                   <Wrench size={80} className="text-white drop-shadow-2xl" />
                </div>
             </div>
          </div>

          {/* Massive Card 2: Electrical (Secure Power) */}
          <div className="group relative card-3d h-[750px] lg:h-[950px] rounded-[5rem] border-4 border-white/10 shadow-3xl bg-slate-900 lg:mt-48 transition-all duration-1000 no-clip">
             
             {/* 3D Background Visual */}
             <div className="absolute inset-0 rounded-[4.8rem] overflow-hidden z-0">
                <img 
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop" 
                  alt="High Tech Electrical Circuit" 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                {/* Visual Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] group-hover:bg-orange-600/40 transition-all duration-700"></div>
             </div>

             {/* Content Overlay */}
             <div className="relative p-12 lg:p-16 z-10 flex flex-col h-full justify-end inner-3d">
                
                {/* Floating Icon Holder */}
                <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center shadow-4xl mb-8 group-hover:-rotate-12 transition-transform border-4 border-white/10">
                   <Lightbulb size={48} className="text-white fill-white/20" />
                </div>

                <h3 className="text-5xl lg:text-7xl font-black mb-6 leading-none tracking-tighter text-white">
                   {t('showcase_card_2')}
                </h3>
                
                <p className="text-xl lg:text-2xl text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
                   {lang === 'ar' 
                     ? 'تأمين لوحات الكهرباء وحماية الأجهزة من الصدمات الكهربائية باستخدام أحدث قواطع التيار الذكية.' 
                     : 'Securing electrical panels and protecting devices from surges using the latest smart breakers.'}
                </p>

                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/5 backdrop-blur-3xl px-8 py-5 rounded-[2rem] border border-white/10 flex items-center gap-4 shadow-2xl">
                      <Activity className="text-secondary" size={32} />
                      <span className="font-black text-xl">{lang === 'ar' ? 'أمان تيار ١٠٠٪' : '100% Safety'}</span>
                   </div>
                </div>
             </div>

             {/* 3D Pop-out "Bolt" Element (Visual Deco) */}
             <div className="absolute bottom-40 left-[-40px] z-20 animate-float-delayed opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="bg-slate-800/90 backdrop-blur-2xl p-10 rounded-full border-4 border-secondary shadow-4xl transform rotate-45">
                   <Zap size={80} className="text-secondary fill-secondary/20 animate-pulse" />
                </div>
             </div>
          </div>

        </div>

        {/* Brand Footer Deco */}
        <div className="mt-60 flex flex-col items-center gap-6 opacity-30 group">
           <div className="h-px w-64 bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
           <p className="text-slate-400 font-black tracking-[1.5em] text-sm uppercase">
             HomeServe Pro Technical Excellence
           </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalShowcase;
