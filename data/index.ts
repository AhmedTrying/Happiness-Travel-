export const BRAND = {
  nameAr: 'هابينيس وورلد للسفر',
  nameEn: 'Happiness World Travel',
  handle: '@happiness.w.bh',
  phone1: '+973 17000447',
  phone2: '+973 33692227',
  whatsapp: 'https://wa.me/97333692227',
  instagram: 'https://instagram.com/happiness.w.bh',
  country: 'مملكة البحرين',
};

export type Package = {
  id: string;
  ar: string;
  en: string;
  sub: string;
  nights: number;
  days: number;
  price: number;
  tripType: string;
  hue: number;
  accent: string;
  icons: string[];
  tag: string;
  photo: string;
};

export const PACKAGES: Package[] = [
  { id: 'london', ar: 'لندن', en: 'London', sub: 'العاصمة الضبابية · معالم ملكية', nights: 6, days: 7, price: 585, tripType: 'فردية', hue: 220, accent: '#4A6FA5', icons: ['flight', 'hotel'], tag: 'مايو ٢٠٢٦', photo: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&q=80' },
  { id: 'istanbul', ar: 'اسطنبول', en: 'Istanbul', sub: 'البوسفور · آيا صوفيا · المدينة القديمة', nights: 5, days: 6, price: 199, tripType: 'فردية', hue: 195, accent: '#2C7DA0', icons: ['flight', 'hotel', 'meals'], tag: 'عيد العمال', photo: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80' },
  { id: 'moscow', ar: 'موسكو', en: 'Moscow', sub: 'الساحة الحمراء · الكرملين', nights: 7, days: 8, price: 575, tripType: 'جماعية', hue: 25, accent: '#C85A3A', icons: ['flight-direct', 'hotel', 'meals', 'tours'], tag: 'عيد الأضحى', photo: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80' },
  { id: 'georgia', ar: 'جورجيا', en: 'Georgia', sub: 'تبليسي · باتومي · كازبيغي', nights: 7, days: 8, price: 375, tripType: 'جماعية', hue: 145, accent: '#3A8A5F', icons: ['flight-direct', 'hotel', 'meals', 'tours'], tag: 'رحلات الصيف', photo: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=1200&q=80' },
  { id: 'azerbaijan', ar: 'أذربيجان', en: 'Azerbaijan', sub: 'باكو · البلدة القديمة · الجبال', nights: 7, days: 8, price: 365, tripType: 'جماعية', hue: 155, accent: '#2D8C74', icons: ['flight-direct', 'hotel', 'meals', 'tours'], tag: 'رحلات الصيف', photo: '/Azerbaijan.png' },
  { id: 'phuket', ar: 'بوكيت وكرابي', en: 'Phuket & Krabi', sub: 'جزر · شواطئ · مغامرات', nights: 6, days: 7, price: 445, tripType: 'فردية', hue: 175, accent: '#2FA8A0', icons: ['flight', 'hotel', 'meals'], tag: 'الأكثر طلباً', photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80' },
  { id: 'maldives', ar: 'المالديف', en: 'Maldives', sub: 'فيلا مائية · بحار فيروزية', nights: 5, days: 6, price: 665, tripType: 'فردية', hue: 185, accent: '#1E8FA5', icons: ['flight', 'hotel', 'meals'], tag: 'شهر العسل', photo: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80' },
  { id: 'paris', ar: 'باريس', en: 'Paris', sub: 'برج إيفل · الشانزليزيه · اللوفر', nights: 5, days: 6, price: 495, tripType: 'فردية', hue: 330, accent: '#B85C8E', icons: ['flight', 'hotel', 'meals'], tag: 'صيف ٢٠٢٦', photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80' },
];

export type Fare = {
  id: string;
  from: string;
  to: string;
  nameAr: string;
  nameEn: string;
  price: number;
  direction: 'one-way' | 'return';
};

export const FARES: Fare[] = [
  { id: 'cmn-bha', from: 'BHA', to: 'CMN', nameAr: 'كازابلانكا', nameEn: 'Casablanca', price: 130, direction: 'one-way' },
  { id: 'bha-cmn', from: 'CMN', to: 'BHA', nameAr: 'كازابلانكا', nameEn: 'Casablanca', price: 177, direction: 'return' },
  { id: 'bha-dac-1', from: 'BHA', to: 'DAC', nameAr: 'بنغلاديش', nameEn: 'Bangladesh', price: 79, direction: 'one-way' },
  { id: 'bha-dac-2', from: 'BHA', to: 'DAC', nameAr: 'بنغلاديش', nameEn: 'Bangladesh', price: 155, direction: 'one-way' },
  { id: 'bha-bkk', from: 'BHA', to: 'BKK', nameAr: 'بانكوك', nameEn: 'Bangkok', price: 133, direction: 'one-way' },
  { id: 'bkk-bha', from: 'BKK', to: 'BHA', nameAr: 'بانكوك', nameEn: 'Bangkok', price: 166, direction: 'one-way' },
  { id: 'bha-ist', from: 'BHA', to: 'IST', nameAr: 'اسطنبول', nameEn: 'Istanbul', price: 145, direction: 'one-way' },
  { id: 'bha-dxb', from: 'BHA', to: 'DXB', nameAr: 'دبي', nameEn: 'Dubai', price: 45, direction: 'one-way' },
  { id: 'bha-cai', from: 'BHA', to: 'CAI', nameAr: 'القاهرة', nameEn: 'Cairo', price: 95, direction: 'one-way' },
];

export type Service = {
  icon: string;
  ar: string;
  en: string;
  desc: string;
};

export const SERVICES: Service[] = [
  { icon: 'plane', ar: 'حجوزات طيران', en: 'Flights', desc: 'أسعار تنافسية على جميع الخطوط' },
  { icon: 'hotel', ar: 'حجوزات فنادق', en: 'Hotels', desc: 'فنادق ٤ و ٥ نجوم حول العالم' },
  { icon: 'bag', ar: 'باقات سياحية', en: 'Packages', desc: 'رحلات مصممة بكل التفاصيل' },
  { icon: 'user', ar: 'رحلات فردية', en: 'Individual', desc: 'برنامج شخصي يناسب ذوقك' },
  { icon: 'users', ar: 'رحلات جماعية', en: 'Group', desc: 'تجارب مشتركة بأسعار مميزة' },
  { icon: 'compass', ar: 'استشارات سفر', en: 'Consulting', desc: 'خبراء يرسمون معك الرحلة' },
];

export const NAV_LINKS = [
  { id: 'home', ar: 'الرئيسية', href: '/' },
  { id: 'packages', ar: 'الباقات السياحية', href: '/packages' },
  { id: 'fares', ar: 'أسعار التذاكر', href: '/ticket-prices' },
  { id: 'contact', ar: 'تواصل معنا', href: '/request' },
];

export const ICON_MAP: Record<string, string> = {
  flight: 'plane',
  'flight-direct': 'plane',
  hotel: 'hotel',
  meals: 'sun',
  tours: 'compass',
};

export const ICON_LABEL: Record<string, string> = {
  flight: 'طيران',
  'flight-direct': 'طيران مباشر',
  hotel: 'فندق',
  meals: 'إفطار',
  tours: 'جولات',
};

export const REQUEST_TYPES = [
  'باقة سياحية',
  'تذكرة طيران فقط',
  'حجز فندق فقط',
  'رحلة مخصصة',
  'شهر العسل',
  'رحلة جماعية',
];
