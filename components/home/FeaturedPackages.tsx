'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import DestImage from '@/components/DestImage';
import { HWT } from '@/lib/theme';
import { PACKAGES } from '@/data';

export default function FeaturedPackages() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,96px) 0', background: '#FFF9EE' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 12 }}>FEATURED PACKAGES</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.15, maxWidth: 560 }}>
              الباقات <span style={{ color: HWT.orange }}>الأكثر طلباً</span> لهذا الموسم
            </h2>
          </div>
          <HBtn variant="ghost" href="/packages" icon="arrow-left">جميع الباقات</HBtn>
        </div>
        <div style={{ gap: 24 }} className="rg-3">
          {PACKAGES.slice(0, 6).map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ translateY: -6, boxShadow: '0 20px 44px rgba(30,58,95,0.15)' }}
              style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: '0 6px 20px rgba(30,58,95,0.08)' }}>
              <div style={{ position: 'relative' }}>
                <DestImage pkg={p} height={240} radius={0} />
                <div style={{ position: 'absolute', top: 16, right: 16, background: HWT.orange, color: '#fff', padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 800, fontFamily: 'Tajawal, sans-serif' }}>{p.tag}</div>
                <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.95)', color: HWT.navy, padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, fontFamily: 'Tajawal, sans-serif' }}>{p.tripType}</div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 26, lineHeight: 1 }}>{p.ar}</h3>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, letterSpacing: 2, color: HWT.muted, marginTop: 4, textTransform: 'uppercase' }}>{p.en}</div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 10, color: HWT.muted, fontWeight: 600 }}>ابتداءً من</div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 900, color: HWT.orange, lineHeight: 1 }}>{p.price} <span style={{ fontSize: 14, color: HWT.navy }}>BD</span></div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: HWT.muted, lineHeight: 1.6, margin: '8px 0 16px' }}>{p.sub}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px dashed rgba(30,58,95,0.15)' }}>
                  <div style={{ display: 'flex', gap: 14, fontSize: 12, color: HWT.muted }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      <HIcon name="calendar" size={14} color={HWT.orange} />
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{p.days}</span> أيام
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      <HIcon name="clock" size={14} color={HWT.orange} />
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{p.nights}</span> ليالٍ
                    </span>
                  </div>
                  <Link href="/request" style={{ color: HWT.orange, fontWeight: 800, fontSize: 13, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    احجز <HIcon name="arrow-left" size={14} color={HWT.orange} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
