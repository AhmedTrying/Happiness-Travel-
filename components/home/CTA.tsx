import HBtn from '@/components/HBtn';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { BRAND } from '@/data';

export default function CTA() {
  return (
    <section style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,32px)' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        background: `linear-gradient(120deg, ${HWT.navy} 0%, ${HWT.navyDeep} 100%)`,
        borderRadius: 'clamp(20px,3vw,32px)',
        padding: 'clamp(36px,6vw,64px) clamp(24px,5vw,64px)',
        position: 'relative', overflow: 'hidden', color: '#fff',
      }}>
        <svg style={{ position: 'absolute', top: -40, right: -40, width: 420, height: 280, opacity: 0.25, pointerEvents: 'none' }} viewBox="0 0 420 280" fill="none">
          <path d="M10 260 Q 210 -40, 410 160" stroke={HWT.orange} strokeWidth="4" strokeDasharray="14 10"/>
        </svg>
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${HWT.orange}44 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div
          style={{ gap: 'clamp(24px,4vw,48px)', alignItems: 'center', position: 'relative', zIndex: 1 }}
          className="rg-cta"
        >
          {/* Left — headline + buttons */}
          <div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              جاهز لرحلتك <span style={{ color: HWT.orange }}>التالية</span>؟
            </h2>
            <p style={{ fontSize: 'clamp(15px,2vw,17px)', opacity: 0.85, lineHeight: 1.8, maxWidth: 560 }}>
              تواصل معنا الآن واحصل على عرض مخصص لرحلتك خلال 30 دقيقة. استشارة بدون التزام.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <HBtn variant="primary" size="lg" href="/request" icon="arrow-left">ابدأ التخطيط</HBtn>
              <a
                href={`tel:${BRAND.phone1.replace(/\s/g, '')}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  border: '1.5px solid rgba(255,255,255,0.35)', padding: '14px 24px',
                  borderRadius: 999, color: '#fff', textDecoration: 'none',
                  fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: 15,
                }}
              >
                <HIcon name="phone" size={18} />
                <span dir="ltr">{BRAND.phone1}</span>
              </a>
            </div>
          </div>

          {/* Right — quick contact card */}
          <div style={{
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20,
            padding: 'clamp(20px,3vw,28px)',
          }}>
            <div style={{ fontSize: 13, color: HWT.orange, fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>تواصل سريع</div>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 14, textDecoration: 'none', color: '#fff', marginBottom: 10 }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: '#25D366', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <HIcon name="whatsapp" size={24} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>واتساب مباشر</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18, direction: 'ltr' }}>{BRAND.phone2}</div>
              </div>
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <HIcon name="insta" size={22} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>تابعنا على انستقرام</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18 }}>{BRAND.handle}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
