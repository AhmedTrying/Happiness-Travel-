'use client';
import { motion } from 'framer-motion';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { SERVICES } from '@/data';

export default function Services() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,96px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto clamp(40px,6vw,64px)' }}>
          <div style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 12 }}>OUR SERVICES</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.15 }}>
            كل ما تحتاجه لرحلة <span style={{ color: HWT.orange }}>لا تُنسى</span>
          </h2>
          <p style={{ fontSize: 17, color: HWT.muted, lineHeight: 1.7, marginTop: 16 }}>
            من التخطيط إلى الحجز إلى خدمة ما بعد السفر — فريقنا يرافقك في كل خطوة.
          </p>
        </div>
        <div style={{ gap: 20 }} className="rg-3">
          {SERVICES.map((s, i) => (
            <motion.div key={i}
              whileHover={{ translateY: -4, boxShadow: '0 14px 34px rgba(30,58,95,0.1)' }}
              style={{ background: '#FFF9EE', border: '1px solid rgba(30,58,95,0.08)', borderRadius: 20, padding: 32, cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: 60, height: 60, borderRadius: 16, background: HWT.navy, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                <HIcon name={s.icon} size={28} color="#fff" />
                <div style={{ position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: '50%', background: HWT.orange }}/>
              </div>
              <h3 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 22, marginBottom: 8 }}>{s.ar}</h3>
              <p style={{ fontSize: 14, color: HWT.muted, lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
