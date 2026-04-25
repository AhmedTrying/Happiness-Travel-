import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HWT } from '@/lib/theme';
import FaresClient from '@/components/fares/FaresClient';

export const metadata: Metadata = {
  title: 'أسعار التذاكر — Happiness World Travel',
  description: 'أسعار تذاكر طيران تبدأ من 45 BD للاتجاه الواحد، شاملة الضرائب.',
};

export default function TicketPricesPage() {
  return (
    <div>
      <Navbar active="fares" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${HWT.navyDeep} 0%, ${HWT.navy} 100%)`, color: '#fff', padding: 'clamp(40px,7vw,64px) 0 clamp(48px,8vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: -40, left: -40, width: 460, height: 220, opacity: 0.25 }} viewBox="0 0 460 220" fill="none">
          <path d="M10 200 Q 230 -40, 450 140" stroke={HWT.orange} strokeWidth="4" strokeDasharray="14 10"/>
        </svg>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, opacity: 0.75, marginBottom: 18 }}>
            <Link href="/" style={{ color: '#fff', opacity: 0.7, textDecoration: 'none' }}>الرئيسية</Link>
            <span>›</span>
            <span style={{ color: HWT.orange }}>أسعار التذاكر</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.1 }}>
            أسعار التذاكر <span style={{ color: HWT.orange }}>المتاحة الآن</span>
          </h1>
          <p style={{ fontSize: 18, opacity: 0.82, lineHeight: 1.8, marginTop: 16, maxWidth: 680 }}>
            أسعار تبدأ من{' '}
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, color: HWT.orange }}>45 BD</span>{' '}
            للاتجاه الواحد. جميع الأسعار شاملة الضرائب ورسوم المطار.
          </p>
        </div>
      </section>

      <FaresClient />
      <Footer />
    </div>
  );
}
