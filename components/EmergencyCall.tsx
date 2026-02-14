
import React from 'react';
import { useApp } from '../App';
import { Phone, Zap, ShieldAlert, CircleDot } from 'lucide-react';

const EmergencyCall: React.FC = () => {
  const { t, lang } = useApp();

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full">
              <Zap className="text-red-500 animate-pulse" size={18} />
              <span className="text-red-500 font-black text-sm uppercase tracking-widest">
                {lang === 'ar' ? 'خدمة الطوارئ ٢٤ ساعة' : '24/7 Emergency Service'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
               {t('emergency_ui_title')}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
               {t('emergency_ui_desc')}
            </p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                  <div className="bg-red-500 p-4 rounded-2xl shadow-lg shadow-red-500/30">
                     <ShieldAlert size={32} />
                  </div>
                  <div>
                     <p className="font-black text-xl">{lang === 'ar' ? 'سرعة استجابة فائقة' : 'Ultra-Fast Response'}</p>
                     <p className="text-slate-400">{lang === 'ar' ? 'فني الطوارئ هيوصلك في أقل من ٣٠ دقيقة.' : 'Emergency pro arrives in under 30 mins.'}</p>
                  </div>
               </div>
            </div>
            <button 
                onClick={() => window.open('tel:01210285859')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-red-600/30 transition-all flex items-center justify-center gap-3 w-full sm:w-fit"
            >
              <Phone size={24} />
              {t('emergency_btn')}
            </button>
          </div>

          {/* 3D Phone Mockup */}
          <div className="flex justify-center perspective-3d">
             <div className="relative w-[300px] h-[600px] bg-slate-800 rounded-[3.5rem] p-3 border-8 border-slate-700 shadow-3xl card-3d">
                {/* Screen Content */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative border-4 border-slate-900">
                   {/* Top Bar */}
                   <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
                      <span className="text-xs font-bold">12:45</span>
                      <div className="flex gap-1">
                         <div className="w-4 h-2 bg-white/40 rounded-sm"></div>
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                   </div>

                   {/* Call Interface */}
                   <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-900 to-red-950">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-pulse">
                         <Phone size={40} fill="white" />
                      </div>
                      <h3 className="text-2xl font-black mb-2">{lang === 'ar' ? 'HomeServe Pro' : 'HomeServe Pro'}</h3>
                      <p className="text-red-500 font-bold mb-12 animate-pulse">{t('emergency_status')}</p>
                      
                      <div className="grid grid-cols-2 gap-4 w-full">
                         <div className="bg-slate-800/80 p-4 rounded-2xl flex flex-col items-center gap-2">
                            <CircleDot size={20} className="text-slate-500" />
                            <span className="text-[10px] font-bold uppercase">{lang === 'ar' ? 'تحديد الموقع' : 'Location'}</span>
                         </div>
                         <div className="bg-slate-800/80 p-4 rounded-2xl flex flex-col items-center gap-2">
                            <Zap size={20} className="text-slate-500" />
                            <span className="text-[10px] font-bold uppercase">{lang === 'ar' ? 'تحديد الفني' : 'Matching'}</span>
                         </div>
                      </div>
                      
                      <div className="mt-auto mb-10">
                         <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                            <Phone size={24} className="rotate-[135deg]" />
                         </div>
                         <p className="text-[10px] mt-4 font-bold opacity-50">{lang === 'ar' ? 'إلغاء الطلب' : 'Cancel Request'}</p>
                      </div>
                   </div>
                </div>
                
                {/* Physical buttons deco */}
                <div className="absolute top-24 -left-3 w-1.5 h-12 bg-slate-700 rounded-r-lg"></div>
                <div className="absolute top-40 -left-3 w-1.5 h-20 bg-slate-700 rounded-r-lg"></div>
                <div className="absolute top-24 -right-3 w-1.5 h-16 bg-slate-700 rounded-l-lg"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyCall;
