'use client';
import { motion } from 'framer-motion';
import DestImage from '@/components/DestImage';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { PACKAGES } from '@/data';

const items = [
  { icon: 'shield', ar: 'ضمان أفضل الأسعار', desc: 'لو لقيت سعر أقل، نطابقه — بدون تعقيد.' },
  { icon: 'star', ar: 'فنادق 4 و 5 نجوم', desc: 'نختار لك أفضل الخيارات بكل موقع.' },
  { icon: 'heart', ar: 'خدمة 24 ساعة', desc: 'فريق دعم متواصل قبل وبعد السفر.' },
  { icon: 'sparkles', ar: 'تصميم رحلات مخصصة', desc: 'برنامج يناسب ذوقك وميزانيتك.' },
];

export default function WhyUs() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,96px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', gap: 'clamp(40px,6vw,64px)', alignItems: 'center' }}
        className="rg-why">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}>
          <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 18px 50px rgba(30,58,95,0.18)', border: `4px solid ${HWT.orange}` }}>
            <DestImage pkg={PACKAGES[6]} height={480} radius={24} />
          </div>
          <div style={{ position: 'absolute', bottom: 'clamp(-16px,-2vw,-30px)', right: 'clamp(-16px,-2vw,-30px)', background: HWT.orange, color: '#fff', padding: 'clamp(18px,2.5vw,28px)', borderRadius: 20, boxShadow: '0 12px 32px rgba(245,165,36,0.45)', maxWidth: 220 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 44, fontWeight: 900, lineHeight: 1 }}>98%</div>
            <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 14, marginTop: 4 }}>من عملائنا يوصون بنا لعائلتهم وأصدقائهم</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <div style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 12 }}>WHY US</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            لماذا <span style={{ color: HWT.orange }}>هابينيس وورلد</span>؟
          </h2>
          <p style={{ fontSize: 16, color: HWT.muted, lineHeight: 1.8, marginBottom: 32 }}>
            لأن الفرق بين رحلة عادية ورحلة استثنائية هو في التفاصيل الصغيرة. نحن نهتم بهذه التفاصيل من أجلك.
          </p>
          <div style={{ gap: 16 }} className="rg-highlights">
            {items.map((it, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: 20, background: '#FFF9EE', borderRadius: 16, borderRight: `3px solid ${HWT.orange}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: HWT.navy, display: 'grid', placeItems: 'center', marginBottom: 12 }}>
                  <HIcon name={it.icon} size={22} color="#fff" />
                </div>
                <h4 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 17, marginBottom: 6 }}>{it.ar}</h4>
                <p style={{ fontSize: 13, color: HWT.muted, lineHeight: 1.6 }}>{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
