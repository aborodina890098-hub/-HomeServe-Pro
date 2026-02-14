
import React from 'react';
import { useApp } from '../App';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, lang } = useApp();

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-white font-black text-xl italic">H</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                HomeServe<span className="text-secondary">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              {lang === 'ar' ? 'المنصة رقم #1 في مصر لخدمات الصيانة المنزلية. جودة، أمان، وسرعة.' : 'Egypt\'s #1 platform for home services. Quality, safety, and speed.'}
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('nav_home')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('nav_services')}</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">{t('nav_why')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors font-bold text-secondary">احجز دلوقتي</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6">{lang === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>{lang === 'ar' ? 'سباكة وكهرباء' : 'Plumbing & Electric'}</li>
              <li>{lang === 'ar' ? 'صيانة تكييفات' : 'AC Maintenance'}</li>
              <li>{lang === 'ar' ? 'تنظيف عميق' : 'Deep Cleaning'}</li>
              <li>{lang === 'ar' ? 'مكافحة حشرات' : 'Pest Control'}</li>
              <li>{lang === 'ar' ? 'صيانة أجهزة منزلية' : 'Appliance Repair'}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span dir="ltr">+20 1210285859</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>support@homeservepro.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>المهندسين، الجيزة - مصر</span>
              </li>
              <li className="mt-6 pt-6 border-t border-slate-800 text-xs italic opacity-50">
                All Rights Reserved &copy; 2025 HomeServe Pro.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
           <p>HomeServe Pro is an Egyptian tech-platform connecting customers with professionals.</p>
           <div className="flex gap-8">
             <a href="#">Terms of Service</a>
             <a href="#">Privacy Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
