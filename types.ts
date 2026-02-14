
export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface TranslationStrings {
  [key: string]: {
    ar: string;
    en: string;
  };
}

export interface Service {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  price: { ar: string; en: string };
  category: 'emergency' | 'maintenance' | 'finishing' | 'cleaning';
  icon: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  city: string;
  service: string;
  isEmergency: boolean;
  preferredTime: string;
  details: string;
  paymentMethod: 'cash' | 'online';
}
