'use client';
import { useState } from 'react';
import type { Package } from '@/data';

type DestImageProps = {
  pkg: Package;
  height?: number;
  radius?: number;
};

export default function DestImage({ pkg, height = 260, radius = 20 }: DestImageProps) {
  const [err, setErr] = useState(false);

  if (err || !pkg.photo) {
    const c1 = `oklch(0.78 0.09 ${pkg.hue})`;
    const c2 = `oklch(0.52 0.13 ${pkg.hue})`;
    const c3 = `oklch(0.28 0.09 ${pkg.hue})`;
    return (
      <div style={{
        position: 'relative', height, borderRadius: radius, overflow: 'hidden',
        background: `linear-gradient(160deg, ${c1} 0%, ${c2} 55%, ${c3} 100%)`,
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.4) 14px 15px)' }}/>
        <div style={{ position: 'absolute', bottom: 18, right: 18, left: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: 'rgba(255,255,255,0.65)', letterSpacing: 1.2, textTransform: 'uppercase' }}>[PHOTO]</div>
          <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 32, color: '#fff', lineHeight: 1, textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>{pkg.ar}</div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.9)', letterSpacing: 1.5 }}>{pkg.en.toUpperCase()}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={pkg.photo}
        onError={() => setErr(true)}
        crossOrigin="anonymous"
        alt={pkg.ar}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }}/>
    </div>
  );
}
