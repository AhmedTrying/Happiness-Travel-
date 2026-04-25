import Link from 'next/link';
import HIcon from './HIcon';
import { HWT } from '@/lib/theme';

type HBtnVariant = 'primary' | 'secondary' | 'ghost' | 'ghostLight' | 'white';
type HBtnSize = 'sm' | 'md' | 'lg';

type HBtnProps = {
  variant?: HBtnVariant;
  size?: HBtnSize;
  href?: string;
  icon?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  external?: boolean;
};

const variantStyles: Record<HBtnVariant, React.CSSProperties> = {
  primary: { background: HWT.orange, color: '#fff', border: 'none', boxShadow: '0 6px 18px rgba(245,165,36,0.4)' },
  secondary: { background: HWT.navy, color: '#fff', border: 'none' },
  ghost: { background: 'transparent', color: HWT.ink, border: `1.5px solid ${HWT.navy}` },
  ghostLight: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)' },
  white: { background: '#fff', color: HWT.navy, border: 'none' },
};

const sizeStyles: Record<HBtnSize, React.CSSProperties> = {
  lg: { padding: '16px 32px', fontSize: 16 },
  md: { padding: '12px 24px', fontSize: 15 },
  sm: { padding: '8px 16px', fontSize: 13 },
};

const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  borderRadius: 999,
  fontFamily: 'Tajawal, sans-serif',
  fontWeight: 800,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform .15s, box-shadow .15s',
};

export default function HBtn({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  children,
  onClick,
  type = 'button',
  external = false,
}: HBtnProps) {
  const style = { ...baseStyle, ...variantStyles[variant], ...sizeStyles[size] };
  const iconEl = icon ? <HIcon name={icon} size={size === 'lg' ? 18 : 16} /> : null;
  const content = <>{children}{iconEl}</>;

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('https:')) {
      return <a href={href} style={style} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{content}</a>;
    }
    return <Link href={href} style={style}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} style={style}>{content}</button>
  );
}
