'use client';
import { useState } from 'react';
import Link from 'next/link';
import HWTLogo from './HWTLogo';
import HIcon from './HIcon';
import { HWT } from '@/lib/theme';
import { NAV_LINKS } from '@/data';

type NavbarProps = { active?: string };

export default function Navbar({ active = 'home' }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid rgba(30,58,95,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px clamp(16px,4vw,32px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <HWTLogo size={56} />

        {/* Desktop nav */}
        <div style={{ gap: 28, fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 15, color: HWT.ink }}
          className="nav-desktop">
          {NAV_LINKS.map(l => (
            <Link key={l.id} href={l.href} style={{
              color: active === l.id ? HWT.orange : HWT.ink,
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: 4,
              borderBottom: active === l.id ? `2px solid ${HWT.orange}` : '2px solid transparent',
            }}>{l.ar}</Link>
          ))}
        </div>

        <Link href="/request" style={{
          alignItems: 'center', gap: 8,
          background: HWT.orange, color: '#fff', fontFamily: 'Tajawal, sans-serif', fontWeight: 800,
          padding: '10px 22px', borderRadius: 999, textDecoration: 'none', fontSize: 15,
          boxShadow: '0 4px 14px rgba(245,165,36,0.35)',
        }} className="nav-cta">
          احجز الآن <HIcon name="arrow-left" size={16} />
        </Link>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(x => !x)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="nav-hamburger">
          <HIcon name={open ? 'x' : 'menu'} size={24} color={HWT.navy} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid rgba(30,58,95,0.08)', padding: '16px 24px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.id} href={l.href} onClick={() => setOpen(false)} style={{
                color: active === l.id ? HWT.orange : HWT.ink,
                textDecoration: 'none',
                padding: '12px 0',
                fontSize: 17,
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: 700,
                borderBottom: '1px solid rgba(30,58,95,0.06)',
              }}>{l.ar}</Link>
            ))}
            <Link href="/request" onClick={() => setOpen(false)} style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: HWT.orange, color: '#fff', fontFamily: 'Tajawal, sans-serif', fontWeight: 800,
              padding: '14px 24px', borderRadius: 999, textDecoration: 'none', fontSize: 16,
              marginTop: 16,
            }}>
              احجز الآن <HIcon name="arrow-left" size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
