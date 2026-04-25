import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HWT } from '@/lib/theme';
import InquiryForm from '@/components/request/InquiryForm';
import ContactSide from '@/components/request/ContactSide';
import HIcon from '@/components/HIcon';

export const metadata: Metadata = {
  title: 'احجز رحلتك — Happiness World Travel',
  description: 'تواصل معنا واحصل على عرض مخصص لرحلتك خلال 30 دقيقة.',
};

export default function RequestPage() {
  return (
    <div style={{ background: '#F3F7FD' }}>
      <Navbar active="contact" />

      {/* ── Hero ── */}
      <section style={{
        background: `linear-gradient(160deg, ${HWT.navyDeep} 0%, ${HWT.navy} 60%, #1a4a7a 100%)`,
        color: '#fff',
        padding: 'clamp(48px,8vw,80px) 0 clamp(56px,10vw,100px)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Curved flight-path dashes */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 100 Q 360 20, 720 140 T 1440 80"
            stroke={HWT.orange} strokeWidth="1.5" strokeDasharray="16 12" opacity="0.18" />
          <path d="M0 260 Q 480 140, 960 240 T 1440 200"
            stroke="white" strokeWidth="1" strokeDasharray="8 16" opacity="0.06" />
        </svg>

        {/* Dot grid – top-left corner */}
        <svg
          style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 220, pointerEvents: 'none', opacity: 0.05 }}
          viewBox="0 0 220 320" fill="white"
        >
          {([0,1,2,3,4,5,6,7] as const).flatMap(row =>
            ([0,1,2,3] as const).map(col => (
              <circle key={`${row}-${col}`} cx={col * 52 + 26} cy={row * 42 + 21} r="2.5" />
            ))
          )}
        </svg>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>الرئيسية</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: HWT.orange }}>احجز رحلتك</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px,5.5vw,70px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 18 }}>
            خلينا نخطط{' '}
            <span style={{ color: HWT.orange }}>رحلتك</span>{' '}
            سوا
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', opacity: 0.8, lineHeight: 1.85, maxWidth: 580, marginBottom: 32 }}>
            أرسل لنا تفاصيل رحلتك وسيتواصل معك أحد خبرائنا خلال{' '}
            <strong style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif' }}>30 دقيقة</strong>{' '}
            بعرض مخصص.
          </p>

          {/* Trust pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: 'sparkles', label: 'عرض مخصص' },
              { icon: 'shield',   label: 'استشارة مجانية' },
              { icon: 'clock',    label: 'رد خلال 30 دقيقة' },
              { icon: 'map-pin',  label: 'فريق بحريني محلي' },
            ].map(t => (
              <div key={t.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 999, padding: '7px 16px',
                fontSize: 13, fontFamily: 'Tajawal, sans-serif', fontWeight: 700,
              }}>
                <HIcon name={t.icon} size={13} color={HWT.orange} />
                {t.label}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ padding: 'clamp(40px,6vw,64px) 0 clamp(64px,10vw,120px)', background: '#F3F7FD' }}>
        <div
          style={{
            maxWidth: 1280, margin: '0 auto',
            padding: '0 clamp(16px,4vw,32px)',
            gap: 'clamp(24px,3vw,40px)',
            alignItems: 'start',
          }}
          className="rg-request"
        >
          <InquiryForm />
          <ContactSide />
        </div>
      </section>

      <Footer />
    </div>
  );
}
