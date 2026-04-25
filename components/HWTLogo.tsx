import Image from 'next/image';
import Link from 'next/link';
import { HWT } from '@/lib/theme';

type HWTLogoProps = {
  size?: number;
  showWordmark?: boolean;
  light?: boolean;
};

export default function HWTLogo({ size = 56, showWordmark = true, light = false }: HWTLogoProps) {
  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
      <Image
        src="/logo.jpeg"
        alt="Happiness World Travel"
        width={size}
        height={size}
        style={{ borderRadius: '50%', objectFit: 'cover', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      />
      {showWordmark && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'right' }}>
          <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: size * 0.32, color: light ? '#fff' : HWT.navy }}>
            هابينيس وورلد
          </span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: size * 0.21, letterSpacing: 2, color: HWT.orange, marginTop: 3 }}>
            HAPPINESS TRAVEL
          </span>
        </div>
      )}
    </Link>
  );
}
