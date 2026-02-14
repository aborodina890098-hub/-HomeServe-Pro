
import React from 'react';
import { useApp } from '../App';
import { Smartphone, Bell, ArrowRight, ArrowLeft } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const { t, lang } = useApp();

  const handleWhatsApp = () => {
    window.open('https://wa.me/201210285859', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
              {t('final_cta_title')}
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed">
              {t('final_cta_subtitle')}
            </p>
            <button 
              onClick={handleWhatsApp}
              className="group bg-white text-primary hover:bg-secondary hover:text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto lg:mx-0"
            >
              <Smartphone size={28} />
              {t('final_cta_button')}
              {lang === 'ar' ? <ArrowLeft className="group-hover:-translate-x-2 transition-transform" /> : <ArrowRight className="group-hover:translate-x-2 transition-transform" />}
            </button>
          </div>

          {/* Mock Phone Notification */}
          <div className="relative z-10 w-full max-w-sm">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Bell size={24} className="animate-swing" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">{lang === 'ar' ? 'تنبيه مباشر' : 'Live Alert'}</p>
                  <p className="font-black text-lg">{t('final_cta_notif')}</p>
                </div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-2/3 animate-pulse"></div>
              </div>
              <p className="text-xs text-blue-200 mt-3 text-center">
                {lang === 'ar' ? 'يوجد 12 فني متاحين حالياً في منطقتك' : '12 professionals available now in your area'}
              </p>
            </div>
            
            {/* Small tool icons floating behind */}
            <div className="absolute -top-10 -right-10 opacity-20 blur-sm">
              <Smartphone size={120} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
