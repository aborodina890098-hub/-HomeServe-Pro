
import React, { useState } from 'react';
import { useApp } from '../App';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const { lang } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { 
      q: lang === 'ar' ? 'إيه هو نظام الضمان بتاعكم؟' : 'What is your warranty policy?', 
      a: lang === 'ar' ? 'بنقدم ضمان 30 يوم على كل الخدمات اللي بنعملها. لو نفس المشكلة رجعت تاني، بنصلحها مجاناً.' : 'We offer a 30-day warranty on all services. If the same issue recurs, we fix it for free.'
    },
    { 
      q: lang === 'ar' ? 'ازاي بيتم تحديد السعر؟' : 'How are prices determined?', 
      a: lang === 'ar' ? 'عندنا تسعير ثابت لمعظم الخدمات الشائعة. الفني بيفحص المكان ويحدد السعر قبل ما يبدأ شغل.' : 'We have fixed pricing for common services. The pro inspects the site and gives a final quote before starting.'
    },
    { 
      q: lang === 'ar' ? 'هل الفنيين بتوعكم موثوقين؟' : 'Are your technicians trusted?', 
      a: lang === 'ar' ? 'طبعاً، كل فني بيمر بمراحل فحص جنائي واختبارات فنية ومقابلات شخصية قبل ما ينضم لينا.' : 'Yes, every technician undergoes background checks, technical tests, and interviews before joining us.'
    },
    { 
      q: lang === 'ar' ? 'متاحين في مناطق إيه؟' : 'What areas do you cover?', 
      a: lang === 'ar' ? 'متاحين حالياً في جميع مناطق القاهرة، الجيزة، والاسكندرية والساحل الشمالي.' : 'We are currently active in Cairo, Giza, Alexandria, and the North Coast.'
    },
    { 
      q: lang === 'ar' ? 'ممكن أدفع فيزا ولا لازم كاش؟' : 'Can I pay by card or only cash?', 
      a: lang === 'ar' ? 'متاح الدفع كاش للفني بعد انتهاء الخدمة، أو أونلاين من خلال التطبيق أو رابط دفع.' : 'You can pay cash after the service or online via our app or payment link.'
    },
    { 
      q: lang === 'ar' ? 'لو لغيت الموعد فيه رسوم؟' : 'Is there a cancellation fee?', 
      a: lang === 'ar' ? 'الإلغاء مجاني تماماً لو قبل الموعد بـ 24 ساعة. لو الفني في الطريق بيكون فيه رسوم زيارة رمزية.' : 'Cancellation is free if done 24h before. If the pro is already on his way, a small visit fee applies.'
    },
    {
      q: lang === 'ar' ? 'إيه الماركات اللي بتعملوا لها صيانة؟' : 'Which brands do you repair?',
      a: lang === 'ar' ? 'بنغطي معظم الماركات العالمية والمحلية زي سامسونج، إل جي، توشيبا، شارب، وأكثر.' : 'We cover most global and local brands like Samsung, LG, Toshiba, Sharp, and more.'
    },
    {
      q: lang === 'ar' ? 'إزاي بيتم اختيار الفني للزيارة؟' : 'How is the pro chosen for my visit?',
      a: lang === 'ar' ? 'بنختار الفني الأقرب لمكانك والأكثر خبرة في نوع المشكلة اللي وصفتها في طلبك.' : 'We choose the technician closest to your location with the most expertise in the specific issue you described.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-black mb-12 text-center">
            {lang === 'ar' ? 'أسئلة بتيجي في بالك' : 'Common Questions'}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 text-right rtl:text-right ltr:text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIdx === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIdx === i && (
                <div className="p-6 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 leading-relaxed animate-slide-up">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
