
import { BookingFormData } from '../types';

const WHATSAPP_NUMBER = '201210285859';

export const buildWhatsAppLink = (data: BookingFormData): string => {
  const message = `*طلب خدمة جديد - HomeServe Pro* 🏠\n\n` +
    `👤 *الاسم:* ${data.name}\n` +
    `📞 *رقم الهاتف:* ${data.phone}\n` +
    `📍 *المدينة/الحي:* ${data.city}\n` +
    `🛠️ *الخدمة:* ${data.service}\n` +
    `🚨 *طوارئ؟:* ${data.isEmergency ? 'نعم (خلال 30 دقيقة)' : 'لا'}\n` +
    `⏰ *الموعد:* ${data.preferredTime}\n` +
    `💵 *الدفع:* ${data.paymentMethod === 'cash' ? 'كاش' : 'أونلاين'}\n` +
    `📝 *التفاصيل:* ${data.details || 'لا يوجد تفاصيل إضافية'}`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
