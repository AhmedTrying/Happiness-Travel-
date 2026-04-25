import Link from 'next/link';
import HWTLogo from './HWTLogo';
import HIcon from './HIcon';
import { HWT } from '@/lib/theme';
import { BRAND, NAV_LINKS } from '@/data';

const colHead = {
  fontFamily: 'Tajawal, sans-serif',
  fontWeight: 900,
  fontSize: 15,
  color: HWT.orange,
  letterSpacing: '0.03em',
  marginBottom: 6,
} as const;

const rowLink = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
  fontSize: 14,
  color: '#fff',
  opacity: 0.78,
  textDecoration: 'none',
  fontFamily: 'Tajawal, sans-serif',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
} as const;

export default function Footer() {
  return (
    <footer style={{ background: HWT.navyDeep, color: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Top accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, transparent 0%, ${HWT.orange} 40%, ${HWT.orange} 60%, transparent 100%)` }} />

      {/* Ambient glow — bottom-right corner */}
      <div style={{
        position: 'absolute', bottom: -100, right: -140,
        width: 480, height: 480, borderRadius: '50%',
        background: `radial-gradient(circle, ${HWT.orange}1a 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 32px 0', position: 'relative', zIndex: 1 }}>

        {/* ── Main grid ── */}
        <div
          style={{ gap: '40px 56px', paddingBottom: 52 }}
          className="rg-footer"
        >

          {/* ── Brand column ── */}
          <div>
            <HWTLogo size={56} light />
            <p style={{ marginTop: 20, lineHeight: 1.95, fontSize: 14, opacity: 0.72, fontFamily: 'Tajawal, sans-serif', maxWidth: 290 }}>
              وكالة سفر وسياحة بحرينية متخصصة في تصميم رحلات استثنائية — بأفضل الأسعار وأرقى مستويات الخدمة.
            </p>

            {/* Labeled social pill buttons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 18px', borderRadius: 999,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: 13, fontFamily: 'Tajawal, sans-serif', fontWeight: 700,
                }}
              >
                <HIcon name="whatsapp" size={16} color={HWT.orange} />
                واتساب
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 18px', borderRadius: 999,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: 13, fontFamily: 'Tajawal, sans-serif', fontWeight: 700,
                }}
              >
                <HIcon name="insta" size={16} color={HWT.orange} />
                إنستغرام
              </a>
            </div>
          </div>

          {/* ── Explore ── */}
          <div>
            <h5 style={colHead}>استكشف</h5>
            <div style={{ width: 28, height: 2, background: HWT.orange, borderRadius: 2, marginBottom: 18, opacity: 0.55 }} />
            {NAV_LINKS.map(l => (
              <Link key={l.id} href={l.href} style={rowLink}>{l.ar}</Link>
            ))}
          </div>

          {/* ── Top Destinations ── */}
          <div>
            <h5 style={colHead}>وجهات مميزة</h5>
            <div style={{ width: 28, height: 2, background: HWT.orange, borderRadius: 2, marginBottom: 18, opacity: 0.55 }} />
            {['اسطنبول', 'جورجيا', 'موسكو', 'المالديف', 'باريس', 'لندن'].map(dest => (
              <Link key={dest} href="/packages" style={rowLink}>{dest}</Link>
            ))}
          </div>

          {/* ── Contact ── */}
          <div>
            <h5 style={colHead}>تواصل معنا</h5>
            <div style={{ width: 28, height: 2, background: HWT.orange, borderRadius: 2, marginBottom: 18, opacity: 0.55 }} />

            <a
              href={`tel:${BRAND.phone1.replace(/\s/g, '')}`}
              style={{ ...rowLink, gap: 10, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              <HIcon name="phone" size={15} color={HWT.orange} />
              <span dir="ltr">{BRAND.phone1}</span>
            </a>
            <a
              href={`tel:${BRAND.phone2.replace(/\s/g, '')}`}
              style={{ ...rowLink, gap: 10, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              <HIcon name="phone" size={15} color={HWT.orange} />
              <span dir="ltr">{BRAND.phone2}</span>
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...rowLink, gap: 10 }}
            >
              <HIcon name="insta" size={15} color={HWT.orange} />
              {BRAND.handle}
            </a>
            <div style={{ ...rowLink, gap: 10, borderBottom: 'none' }}>
              <HIcon name="map-pin" size={15} color={HWT.orange} />
              {BRAND.country}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <div style={{ fontSize: 13, opacity: 0.5, fontFamily: 'Tajawal, sans-serif' }}>
            © 2026 Happiness World Travel · جميع الحقوق محفوظة
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, opacity: 0.5, fontFamily: 'Tajawal, sans-serif' }}>
            <HIcon name="map-pin" size={13} color="rgba(245,165,36,0.7)" />
            مرخّصة في مملكة البحرين
          </div>
        </div>

      </div>
    </footer>
  );
}
