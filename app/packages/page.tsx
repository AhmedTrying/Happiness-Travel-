import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import PackagesClient from '@/components/packages/PackagesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'الباقات السياحية — Happiness World Travel',
  description: '8 وجهات مميزة، برامج كاملة من الطيران إلى الفندق والجولات.',
};

export default function PackagesPage() {
  return (
    <div>
      <Navbar active="packages" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${HWT.navyDeep} 0%, ${HWT.navy} 100%)`, color: '#fff', padding: 'clamp(40px,7vw,64px) 0 clamp(48px,8vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: -40, left: -40, width: 460, height: 220, opacity: 0.25 }} viewBox="0 0 460 220" fill="none">
          <path d="M10 200 Q 230 -40, 450 140" stroke={HWT.orange} strokeWidth="4" strokeDasharray="14 10"/>
        </svg>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, opacity: 0.75, marginBottom: 18 }}>
            <Link href="/" style={{ color: '#fff', opacity: 0.7, textDecoration: 'none' }}>الرئيسية</Link>
            <span>›</span>
            <span style={{ color: HWT.orange }}>الباقات السياحية</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.1 }}>
            باقات سياحية مصممة{' '}
            <span style={{ color: HWT.orange }}>لأجمل رحلاتك</span>
          </h1>
          <p style={{ fontSize: 18, opacity: 0.82, lineHeight: 1.8, marginTop: 16, maxWidth: 680 }}>
            8 وجهات مميزة، برامج كاملة من الطيران إلى الفندق والجولات — كل ما عليك هو حزم حقيبتك.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            {['مصممة بعناية', 'مضمونة الجودة', 'تناسب كل الميزانيات'].map(t => (
              <div key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 14px', fontSize: 13, fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                <HIcon name="check" size={12} color={HWT.orange} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackagesClient />
      <Footer />
    </div>
  );
}
