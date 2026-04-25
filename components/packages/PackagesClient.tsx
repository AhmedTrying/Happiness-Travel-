'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function useIsDesktop() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setOk(mq.matches);
    const h = (e: MediaQueryListEvent) => setOk(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);
  return ok;
}
import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { PACKAGES, ICON_MAP, ICON_LABEL } from '@/data';
import type { Package } from '@/data';

const FILTERS = ['الكل', 'رحلات الصيف', 'عيد الأضحى', 'فردية', 'جماعية', 'شهر العسل'];

function PkgImage({ p }: { p: Package }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: 320 }}>
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.photo}
        alt={p.ar}
        crossOrigin="anonymous"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)' }} />

      {/* Event badge — top right (RTL: visible right side) */}
      <div style={{
        position: 'absolute', top: 18, right: 18,
        background: HWT.orange, color: '#fff',
        padding: '6px 16px', borderRadius: 999,
        fontSize: 12, fontWeight: 800, fontFamily: 'Tajawal, sans-serif',
        boxShadow: `0 4px 14px ${HWT.orange}55`,
      }}>
        {p.tag}
      </div>

      {/* Trip type badge — top left (glass) */}
      <div style={{
        position: 'absolute', top: 18, left: 18,
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        background: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.3)',
        color: '#fff', padding: '6px 14px', borderRadius: 999,
        fontSize: 12, fontWeight: 700, fontFamily: 'Tajawal, sans-serif',
      }}>
        {p.tripType}
      </div>

      {/* Destination overlay — bottom */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0, padding: '28px 24px 22px' }}>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
          {p.en}
        </div>
        <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 'clamp(30px,3.5vw,44px)', color: '#fff', lineHeight: 1, textShadow: '0 2px 20px rgba(0,0,0,0.45)' }}>
          {p.ar}
        </div>
      </div>
    </div>
  );
}

function InclusionPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 13px', borderRadius: 999,
      background: `${HWT.orange}12`,
      border: `1px solid ${HWT.orange}30`,
      fontSize: 12, fontWeight: 700, color: HWT.navy,
      fontFamily: 'Tajawal, sans-serif',
    }}>
      <HIcon name={icon} size={13} color={HWT.orange} />
      {label}
    </div>
  );
}

function BigCard({ p, reverse }: { p: Package; reverse: boolean }) {
  const isDesktop = useIsDesktop();
  const imagePane = <PkgImage p={p} />;

  const contentPane = (
    <div style={{ padding: 'clamp(28px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Subtitle */}
      <p style={{ fontSize: 14, color: HWT.muted, marginBottom: 20, lineHeight: 1.8, fontFamily: 'Tajawal, sans-serif', marginTop: 0 }}>
        {p.sub}
      </p>

      {/* Inclusions */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
        {p.icons.map(ic => (
          <InclusionPill key={ic} icon={ICON_MAP[ic] ?? 'plane'} label={ICON_LABEL[ic]} />
        ))}
      </div>

      {/* Stats + Price row */}
      <div style={{
        paddingTop: 20,
        borderTop: '1px dashed rgba(30,58,95,0.15)',
        marginBottom: 26,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
          {/* Duration */}
          <div>
            <div style={{ fontSize: 11, color: HWT.muted, fontWeight: 600, marginBottom: 4 }}>المدة</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 24, fontWeight: 900, color: HWT.navy }}>{p.days}</span>
              <span style={{ fontSize: 12, color: HWT.muted }}>أيام</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 24, fontWeight: 900, color: HWT.navy, marginRight: 6 }}>{p.nights}</span>
              <span style={{ fontSize: 12, color: HWT.muted }}>ليالٍ</span>
            </div>
          </div>

          <div style={{ width: 1, height: 48, background: 'rgba(30,58,95,0.1)', flexShrink: 0 }} />

          {/* Price — large and prominent */}
          <div style={{ marginRight: 'auto' }}>
            <div style={{ fontSize: 11, color: HWT.muted, fontWeight: 600, marginBottom: 2 }}>ابتداءً من</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 52, fontWeight: 900, color: HWT.orange, lineHeight: 1 }}>
                {p.price}
              </span>
              <span style={{ fontSize: 15, color: HWT.muted, fontWeight: 700 }}>BD</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <HBtn variant="primary" href="/request" icon="arrow-left">احجز الآن</HBtn>
        <HBtn variant="ghost" href="https://wa.me/97333692227" icon="whatsapp" external>استفسار واتساب</HBtn>
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
        background: '#fff',
        borderRadius: 'clamp(16px,2vw,28px)',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(30,58,95,0.09)',
        border: '1px solid rgba(30,58,95,0.06)',
      }}
    >
      {reverse ? <>{contentPane}{imagePane}</> : <>{imagePane}{contentPane}</>}
    </div>
  );
}

export default function PackagesClient() {
  const [active, setActive] = useState('الكل');
  const [filterHover, setFilterHover] = useState<string | null>(null);
  const isDesktop = useIsDesktop();

  const filtered = active === 'الكل'
    ? PACKAGES
    : PACKAGES.filter(p =>
        p.tag.includes(active) || p.tripType === active ||
        (active === 'شهر العسل' && p.tag.includes('شهر العسل'))
      );

  return (
    <>
      {/* Filter bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(30,58,95,0.08)', padding: '14px 0', position: 'sticky', top: 73, zIndex: 20 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: HWT.muted, fontFamily: 'Tajawal, sans-serif', fontWeight: 700, marginLeft: 4, whiteSpace: 'nowrap' }}>تصفية:</span>
          {FILTERS.map(f => {
            const isActive = active === f;
            const isHover = filterHover === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                onMouseEnter={() => setFilterHover(f)}
                onMouseLeave={() => setFilterHover(null)}
                style={{
                  background: isActive ? HWT.navy : isHover ? HWT.cream : '#fff',
                  color: isActive ? '#fff' : HWT.ink,
                  border: `1.5px solid ${isActive ? HWT.navy : isHover ? HWT.orange : 'rgba(30,58,95,0.12)'}`,
                  padding: '7px 18px', borderRadius: 999,
                  fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 13,
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {f}
              </button>
            );
          })}
          <span style={{ marginRight: 'auto', fontSize: 12, color: HWT.muted, fontFamily: 'Tajawal, sans-serif' }}>
            {filtered.length} باقة
          </span>
        </div>
      </div>

      {/* Package cards */}
      <section style={{ padding: 'clamp(32px,5vw,56px) 0 clamp(48px,7vw,80px)', background: '#F3F7FD' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {filtered.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <BigCard p={p} reverse={i % 2 === 1} />
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: HWT.muted, fontFamily: 'Tajawal, sans-serif', fontSize: 16 }}>
              لا توجد باقات في هذه الفئة حالياً
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '0 clamp(16px,4vw,32px) clamp(56px,8vw,96px)', background: '#F3F7FD' }}>
        <div
          style={{
            maxWidth: 1280, margin: '0 auto',
            background: `linear-gradient(125deg, ${HWT.navyDeep} 0%, ${HWT.navy} 100%)`,
            borderRadius: 'clamp(16px,3vw,28px)',
            padding: 'clamp(32px,5vw,48px) clamp(24px,4vw,48px)',
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr auto' : '1fr',
            gap: 'clamp(20px,3vw,32px)', alignItems: 'center',
            color: '#fff', position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', border: '60px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -60, right: 80, width: 200, height: 200, borderRadius: '50%', border: '40px solid rgba(245,165,36,0.08)', pointerEvents: 'none' }} />
          <svg style={{ position: 'absolute', top: 20, left: 40, width: 340, height: 120, opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 340 120" fill="none">
            <path d="M10 100 Q 170 -20, 330 80" stroke="#fff" strokeWidth="3" strokeDasharray="14 10"/>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: `${HWT.orange}22`, borderRadius: 999, padding: '5px 14px', marginBottom: 14 }}>
              <HIcon name="compass" size={12} color={HWT.orange} />
              <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 12, color: HWT.orange }}>
                باقة مخصصة لك
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, lineHeight: 1.25, fontFamily: 'Tajawal, sans-serif', margin: '0 0 10px' }}>
              ما لقيت الوجهة اللي تبحث عنها؟
            </h2>
            <p style={{ fontSize: 15, opacity: 0.8, lineHeight: 1.75, fontFamily: 'Tajawal, sans-serif', margin: 0 }}>
              نصمم لك باقة مخصصة لأي وجهة في العالم — فقط أخبرنا أين تريد.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <HBtn variant="primary" size="lg" href="/request" icon="arrow-left">اطلب باقة مخصصة</HBtn>
          </div>
        </div>
      </section>
    </>
  );
}
