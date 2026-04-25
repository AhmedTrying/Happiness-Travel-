'use client';
import { motion } from 'framer-motion';
import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import DestImage from '@/components/DestImage';
import { HWT } from '@/lib/theme';
import { PACKAGES } from '@/data';

export default function Hero() {
  return (
    <section style={{
      background: `linear-gradient(160deg, ${HWT.navyDeep} 0%, ${HWT.navy} 100%)`,
      color: '#fff', position: 'relative', overflow: 'hidden',
      padding: 'clamp(48px,8vw,80px) 0 clamp(56px,10vw,100px)',
    }}>
      {/* Decorative dashed arc */}
      <svg style={{ position: 'absolute', top: -40, left: -60, width: 520, height: 280, opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 520 280" fill="none">
        <path d="M10 260 Q 260 -40, 510 180" stroke={HWT.orange} strokeWidth="4" strokeDasharray="14 10"/>
      </svg>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: 60, left: -160, width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${HWT.orange}2a 0%, transparent 70%)`, pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', position: 'relative', zIndex: 1 }}>
        <div style={{ gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }} className="rg-hero">

          {/* ── Text column ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,165,36,0.12)', border: `1px solid ${HWT.orange}44`, padding: '8px 16px', borderRadius: 999, fontSize: 13, fontWeight: 700, color: HWT.orange, marginBottom: 24 }}>
              <HIcon name="sparkles" size={14} color={HWT.orange} /> صيف 2026 · عروض حصرية
            </div>
            <h1 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
              سافر بسعادة<br/>
              <span style={{ color: HWT.orange }}>مع هابينيس</span> وورلد.
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8, opacity: 0.85, maxWidth: 540 }}>
              وكالة سفر بحرينية. حجوزات طيران، فنادق، وباقات سياحية مصممة بعناية لكل وجهاتك المفضلة — بأسعار تبدأ من{' '}
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: HWT.orange }}>79 BD</span>.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <HBtn variant="primary" size="lg" href="/packages" icon="arrow-left">اكتشف الباقات</HBtn>
              <HBtn variant="ghostLight" size="lg" href="/request">استشارة مجانية</HBtn>
            </div>
            <div style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[{ n: '15K+', l: 'مسافر سعيد' }, { n: '50+', l: 'وجهة حول العالم' }, { n: '24/7', l: 'دعم مباشر' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 900, color: HWT.orange, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 13, opacity: 0.75, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Desktop visual collage ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', height: 520 }}
            className="hidden md:block"
          >
            {/*
              Layout (physical coords inside ~570px-wide container):
              Main  → top:0  right:0  w:76%  h:355  (orange border, dominant)
              Sec   → bot:0  left:0   w:54%  h:210  (white border, bottom-left)
              Badge → top:300 left:-10 (floats in gap between the two cards)
            */}

            {/* Main card — Istanbul */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '76%', height: 355,
              borderRadius: 24, overflow: 'hidden',
              boxShadow: '0 28px 72px rgba(0,0,0,0.55)',
              border: `3px solid ${HWT.orange}`,
              zIndex: 2,
            }}>
              <DestImage pkg={PACKAGES[1]} height={355} radius={22} />
              {/* Label */}
              <div style={{
                position: 'absolute', bottom: 16, right: 16,
                background: 'rgba(8,26,51,0.88)', backdropFilter: 'blur(10px)',
                padding: '10px 16px', borderRadius: 12, color: '#fff',
              }}>
                <div style={{ fontSize: 11, opacity: 0.65, marginBottom: 3 }}>وجهة مميزة</div>
                <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 18, lineHeight: 1 }}>
                  اسطنبول · <span style={{ color: HWT.orange }}>199 BD</span>
                </div>
              </div>
            </div>

            {/* Secondary card — Maldives */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '54%', height: 210,
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 18px 52px rgba(0,0,0,0.45)',
              border: '2.5px solid rgba(255,255,255,0.88)',
              zIndex: 2,
            }}>
              <DestImage pkg={PACKAGES[6]} height={210} radius={18} />
              {/* Label */}
              <div style={{
                position: 'absolute', bottom: 12, right: 12,
                background: 'rgba(8,26,51,0.82)', backdropFilter: 'blur(8px)',
                padding: '6px 12px', borderRadius: 8, color: '#fff',
              }}>
                <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: 13, lineHeight: 1.2 }}>
                  المالديف · <span style={{ color: HWT.orange }}>665 BD</span>
                </div>
              </div>
            </div>

            {/* Floating price badge — sits in the gap between the two cards */}
            <div style={{
              position: 'absolute', top: 302, left: -10,
              background: '#fff', color: HWT.navy,
              padding: '12px 18px', borderRadius: 16,
              boxShadow: '0 12px 32px rgba(0,0,0,0.22)',
              display: 'flex', alignItems: 'center', gap: 12,
              zIndex: 4,
            }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: HWT.orange, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <HIcon name="plane" size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 10, color: HWT.muted, fontWeight: 600 }}>تذاكر من</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 900, color: HWT.navy, lineHeight: 1 }}>
                  45 <span style={{ fontSize: 13, fontWeight: 700 }}>BD</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Mobile visual — single featured card below text ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block md:hidden"
          style={{ marginTop: 36 }}
        >
          <div style={{
            borderRadius: 20, overflow: 'hidden', position: 'relative',
            boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
            border: `2px solid ${HWT.orange}`,
          }}>
            <DestImage pkg={PACKAGES[1]} height={260} radius={18} />
            <div style={{
              position: 'absolute', bottom: 16, right: 16,
              background: 'rgba(8,26,51,0.88)', backdropFilter: 'blur(10px)',
              padding: '10px 16px', borderRadius: 12, color: '#fff',
            }}>
              <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 18 }}>
                اسطنبول · <span style={{ color: HWT.orange }}>199 BD</span>
              </div>
            </div>
          </div>
          {/* Mini fare chip below card on mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, background: 'rgba(255,255,255,0.08)', padding: '10px 16px', borderRadius: 12, width: 'fit-content' }}>
            <HIcon name="plane" size={16} color={HWT.orange} />
            <span style={{ fontFamily: 'Tajawal, sans-serif', fontSize: 14, opacity: 0.9 }}>تذاكر تبدأ من </span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 16, color: HWT.orange }}>45 BD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
