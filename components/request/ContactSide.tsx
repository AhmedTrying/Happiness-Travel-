import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { BRAND } from '@/data';

export default function ContactSide() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <style>{`
        @keyframes hwt-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.78); }
        }
        .hwt-pulse { animation: hwt-pulse 2s ease-in-out infinite; }
      `}</style>

      {/* ── Hero intro card ── */}
      <div style={{
        background: `linear-gradient(145deg, ${HWT.navy} 0%, ${HWT.navyDeep} 100%)`,
        color: '#fff', borderRadius: 24, padding: '28px 28px 32px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Compass rose decoration */}
        <svg
          style={{ position: 'absolute', bottom: -44, left: -44, width: 220, height: 220, opacity: 0.06, pointerEvents: 'none' }}
          viewBox="0 0 200 200" fill="none"
        >
          <circle cx="100" cy="100" r="92" stroke="white" strokeWidth="1.5"/>
          <circle cx="100" cy="100" r="62" stroke="white" strokeWidth="1"/>
          <circle cx="100" cy="100" r="32" stroke="white" strokeWidth="1"/>
          <line x1="100" y1="8" x2="100" y2="192" stroke="white" strokeWidth="1"/>
          <line x1="8" y1="100" x2="192" y2="100" stroke="white" strokeWidth="1"/>
          <line x1="35" y1="35" x2="165" y2="165" stroke="white" strokeWidth="0.5"/>
          <line x1="165" y1="35" x2="35" y2="165" stroke="white" strokeWidth="0.5"/>
        </svg>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Live response badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: `${HWT.orange}20`,
            border: `1px solid ${HWT.orange}50`,
            borderRadius: 999, padding: '5px 12px', marginBottom: 18,
          }}>
            <span
              className="hwt-pulse"
              style={{ display: 'block', width: 7, height: 7, borderRadius: '50%', background: HWT.orange, flexShrink: 0 }}
            />
            <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 12, color: HWT.orange }}>
              ردّنا خلال 30 دقيقة
            </span>
          </div>

          <h3 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 28, lineHeight: 1.25, marginBottom: 10 }}>
            نحن هنا<br />لمساعدتك
          </h3>
          <p style={{ opacity: 0.72, fontSize: 14, lineHeight: 1.85, marginBottom: 24 }}>
            تواصل معنا بأي طريقة تناسبك — فريقنا يرد على جميع الاستفسارات خلال دقائق.
          </p>

          {/* 2×2 trust badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { icon: 'sparkles', text: 'رد سريع' },
              { icon: 'star',     text: 'عرض مخصص' },
              { icon: 'heart',    text: 'استشارة مجانية' },
              { icon: 'shield',   text: 'خصوصية تامة' },
            ].map(b => (
              <div key={b.text} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.11)',
                borderRadius: 10, padding: '9px 12px',
              }}>
                <HIcon name={b.icon} size={14} color={HWT.orange} />
                <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 12 }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WhatsApp featured card ── */}
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block', textDecoration: 'none',
          background: 'linear-gradient(135deg, #20B358 0%, #128C7E 100%)',
          borderRadius: 20, padding: '22px 24px', color: '#fff',
          overflow: 'hidden',
          boxShadow: '0 8px 28px rgba(18,140,126,0.28)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 50, height: 50, borderRadius: 14,
            background: 'rgba(255,255,255,0.16)',
            display: 'grid', placeItems: 'center', flexShrink: 0,
          }}>
            <HIcon name="whatsapp" size={26} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 16, marginBottom: 2 }}>
              واتساب — تواصل فوري
            </div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 800, direction: 'ltr', opacity: 0.9 }}>
              {BRAND.phone2}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8, fontSize: 11, opacity: 0.82, fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
              <span>✓ رد فوري</span>
              <span>✓ متاح 24 ساعة</span>
            </div>
          </div>
          <HIcon name="arrow-left" size={18} color="rgba(255,255,255,0.5)" />
        </div>
      </a>

      {/* ── Phone + Instagram grouped card ── */}
      <div style={{
        background: '#fff', borderRadius: 20,
        border: '1px solid rgba(30,58,95,0.07)',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(30,58,95,0.05)',
      }}>
        <a
          href={`tel:${BRAND.phone1.replace(/\s/g, '')}`}
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '18px 20px', textDecoration: 'none', color: HWT.ink,
            borderBottom: '1px solid rgba(30,58,95,0.07)',
          }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `${HWT.orange}16`,
            display: 'grid', placeItems: 'center', flexShrink: 0,
          }}>
            <HIcon name="phone" size={20} color={HWT.orange} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontFamily: 'Tajawal, sans-serif', color: HWT.muted, fontWeight: 700, marginBottom: 2 }}>الخط الرئيسي</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 800, color: HWT.navy, direction: 'ltr' }}>{BRAND.phone1}</div>
          </div>
          <HIcon name="arrow-left" size={16} color={`${HWT.orange}99`} />
        </a>

        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '18px 20px', textDecoration: 'none', color: HWT.ink,
          }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
            display: 'grid', placeItems: 'center', flexShrink: 0,
          }}>
            <HIcon name="insta" size={20} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontFamily: 'Tajawal, sans-serif', color: HWT.muted, fontWeight: 700, marginBottom: 2 }}>إنستغرام</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 800, color: HWT.navy }}>{BRAND.handle}</div>
          </div>
          <HIcon name="arrow-left" size={16} color={`${HWT.orange}99`} />
        </a>
      </div>

      {/* ── Working hours ── */}
      <div style={{
        background: '#fff', borderRadius: 20,
        border: '1px solid rgba(30,58,95,0.07)',
        padding: '20px 20px 14px',
        boxShadow: '0 2px 12px rgba(30,58,95,0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: `${HWT.orange}16`,
            display: 'grid', placeItems: 'center',
          }}>
            <HIcon name="clock" size={16} color={HWT.orange} />
          </div>
          <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 15, color: HWT.navy }}>ساعات العمل</span>
        </div>
        {[
          { day: 'السبت — الخميس', time: '9:00 AM – 9:00 PM', green: false },
          { day: 'الجمعة',          time: '4:00 PM – 9:00 PM', green: false },
          { day: 'واتساب',          time: '24 / 7',            green: true  },
        ].map((row, i) => (
          <div
            key={row.day}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '9px 0',
              borderTop: '1px solid rgba(30,58,95,0.07)',
            }}
          >
            <span style={{ fontSize: 13, color: HWT.muted, fontFamily: 'Tajawal, sans-serif' }}>{row.day}</span>
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 12, direction: 'ltr',
              color: row.green ? '#25D366' : HWT.navy,
            }}>{row.time}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
