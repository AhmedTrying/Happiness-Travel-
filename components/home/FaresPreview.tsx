import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { FARES } from '@/data';

export default function FaresPreview() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,96px) 0', background: HWT.navyDeep, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', top: 40, left: -60, width: 360, height: 200, opacity: 0.2 }} viewBox="0 0 360 200" fill="none">
        <path d="M10 180 Q 180 -30, 350 100" stroke={HWT.orange} strokeWidth="3" strokeDasharray="12 10"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 12 }}>TICKET PRICES</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.15 }}>
              أسعار تذاكر <span style={{ color: HWT.orange }}>تبدأ من</span>
            </h2>
            <p style={{ fontSize: 16, opacity: 0.8, marginTop: 12 }}>أسعار التذكرة للاتجاه الواحد · تشمل الضرائب</p>
          </div>
          <HBtn variant="white" href="/ticket-prices" icon="arrow-left">جميع الأسعار</HBtn>
        </div>
        <div style={{ gap: 18 }} className="rg-3">
          {FARES.slice(0, 6).map(f => (
            <div key={f.id} style={{ background: '#fff', color: HWT.navy, borderRadius: 14, padding: 20, display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center', border: `2px solid ${HWT.orange}` }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: HWT.navy, padding: '4px 10px', borderRadius: 6, width: 'fit-content', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: 1 }}>
                  <HIcon name="plane" size={13} color={HWT.orange} />
                  <span style={{ color: '#fff' }}>{f.from} TO {f.to}</span>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 26, marginTop: 10 }}>{f.nameEn}</h3>
                <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 14, color: HWT.muted }}>{f.nameAr}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '8px 14px', background: HWT.orange, borderRadius: 10, color: '#fff' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 28, lineHeight: 1 }}>{f.price}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 14 }}>BD</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
