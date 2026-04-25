'use client';
import { useState } from 'react';
import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { FARES, type Fare } from '@/data';

function TicketCard({ f }: { f: Fare }) {
  return (
    <div style={{ background: '#fff', borderRadius: 18, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 100px', boxShadow: '0 6px 20px rgba(30,58,95,0.08)', border: '2px solid rgba(245,165,36,0.15)' }}>
      <div style={{ padding: 'clamp(14px,2vw,20px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: HWT.navy, color: '#fff', padding: '6px 14px', borderRadius: 8, fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: 1.5 }}>
          <HIcon name="plane" size={13} color={HWT.orange} />
          <span>{f.from}</span>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M2 6h20M18 2l4 4-4 4" stroke={HWT.orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{f.to}</span>
        </div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3vw,32px)', marginTop: 12, color: HWT.navy, letterSpacing: '-0.01em' }}>{f.nameEn}</h3>
        <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 14, color: HWT.muted, marginTop: 2 }}>{f.nameAr}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 12 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px,4vw,36px)', fontWeight: 900, color: HWT.orange, lineHeight: 1 }}>{f.price}</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 800, color: HWT.navy }}>BD</span>
          <span style={{ fontSize: 12, color: HWT.muted, marginRight: 8, fontFamily: 'Tajawal, sans-serif' }}>· {f.direction === 'one-way' ? 'اتجاه واحد' : 'ذهاب وعودة'}</span>
        </div>
      </div>
      {/* Stub */}
      <div style={{ background: HWT.orange, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12, position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: -8, width: 16, height: 16, borderRadius: '50%', background: '#FFF9EE' }}/>
        <div style={{ position: 'absolute', bottom: -8, right: -8, width: 16, height: 16, borderRadius: '50%', background: '#FFF9EE' }}/>
        <HIcon name="ticket" size={26} color="#fff" />
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 9, letterSpacing: 1.5, marginTop: 6, opacity: 0.9 }}>NO.</div>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 12, letterSpacing: 1 }}>{f.id.toUpperCase().slice(0, 6)}</div>
        <a href="/request" style={{ marginTop: 8, fontSize: 11, color: '#fff', background: HWT.navy, padding: '4px 10px', borderRadius: 6, textDecoration: 'none', fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>احجز</a>
      </div>
    </div>
  );
}

export default function FaresClient() {
  const [tab, setTab] = useState<'all' | 'one-way' | 'return'>('all');

  const tabs = [
    { id: 'all' as const, ar: 'كل الوجهات' },
    { id: 'one-way' as const, ar: 'اتجاه واحد' },
    { id: 'return' as const, ar: 'ذهاب وعودة' },
  ];

  const filtered = tab === 'all' ? FARES : FARES.filter(f => f.direction === tab);

  return (
    <section style={{ padding: 'clamp(40px,6vw,64px) 0 clamp(56px,8vw,96px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)' }}>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: tab === t.id ? HWT.navy : '#fff',
                color: tab === t.id ? '#fff' : HWT.ink,
                border: tab === t.id ? 'none' : '1px solid rgba(30,58,95,0.1)',
                padding: '10px 22px', borderRadius: 999,
                fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: 14, cursor: 'pointer',
              }}>{t.ar}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: HWT.muted, fontFamily: 'Tajawal, sans-serif' }}>
            <HIcon name="sparkles" size={16} color={HWT.orange} />
            الأسعار تبدأ من · تشمل الضرائب
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ gap: 18 }} className="rg-2">
          {filtered.map(f => <TicketCard key={f.id} f={f} />)}
        </div>

        {/* Trust strip */}
        <div
          style={{ marginTop: 48, padding: 'clamp(20px,3vw,28px)', background: '#fff', borderRadius: 20, border: `2px dashed ${HWT.orange}55`, gap: 20, alignItems: 'center' }}
          className="rg-trust"
        >
          {[
            { icon: 'check', bg: HWT.orange, title: 'تأكيد فوري', desc: 'تأكيد الحجز خلال 30 دقيقة' },
            { icon: 'shield', bg: HWT.navy, title: 'ضمان السعر', desc: 'لو لقيت أقل، نطابقه' },
            { icon: 'phone', bg: HWT.orange, title: 'دعم 24/7', desc: 'فريق جاهز للمساعدة' },
          ].map(it => (
            <div key={it.title} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: it.bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <HIcon name={it.icon} size={22} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 15 }}>{it.title}</div>
                <div style={{ fontSize: 12, color: HWT.muted }}>{it.desc}</div>
              </div>
            </div>
          ))}
          <HBtn variant="primary" href="/request" icon="arrow-left">احجز تذكرتك</HBtn>
        </div>
      </div>
    </section>
  );
}
