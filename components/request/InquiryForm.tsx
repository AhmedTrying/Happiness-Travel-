'use client';
import { useState } from 'react';
import HIcon from '@/components/HIcon';
import { HWT } from '@/lib/theme';
import { PACKAGES, REQUEST_TYPES, BRAND } from '@/data';
import { submitInquiry } from '@/app/actions/inquiries';

const DEST_CHIPS = ['اسطنبول', 'جورجيا', 'باريس', 'لندن', 'المالديف', 'بوكيت'];

const inp: React.CSSProperties = {
  width: '100%',
  padding: '13px 14px',
  border: '1.5px solid rgba(30,58,95,0.12)',
  borderRadius: 10,
  background: '#F8FAFE',
  color: HWT.ink,
  fontSize: 15,
  fontFamily: 'Tajawal, sans-serif',
  display: 'block',
};

function SectionHead({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8,
        background: `${HWT.orange}18`,
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        <HIcon name={icon} size={14} color={HWT.orange} />
      </div>
      <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 15, color: HWT.navy }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'rgba(30,58,95,0.08)' }} />
    </div>
  );
}

function Label({ children, required, hint }: { children: string; required?: boolean; hint?: string }) {
  return (
    <div style={{ marginBottom: 7 }}>
      <label style={{
        display: 'block',
        fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: 13,
        color: HWT.navy, opacity: 0.85,
      }}>
        {children}
        {required && <span style={{ color: HWT.orange, marginRight: 3 }}>*</span>}
      </label>
      {hint && <div style={{ fontSize: 11, color: HWT.muted, marginTop: 2 }}>{hint}</div>}
    </div>
  );
}

function DestChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '7px 16px',
        borderRadius: 999,
        fontSize: 13,
        fontFamily: 'Tajawal, sans-serif',
        fontWeight: 700,
        border: active
          ? `1.5px solid ${HWT.orange}`
          : hover
            ? `1.5px solid ${HWT.orange}`
            : '1.5px solid rgba(30,58,95,0.15)',
        background: active ? HWT.orange : hover ? HWT.cream : '#fff',
        color: active ? '#fff' : HWT.navy,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </button>
  );
}

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', phone: '', destination: '', reqType: REQUEST_TYPES[0],
    travelDate: '', travelers: '2', notes: '',
  });
  const upd = (k: string, v: string) => setForm(x => ({ ...x, [k]: v }));

  if (submitted) {
    return (
      <div style={{
        background: '#fff', borderRadius: 24,
        padding: 'clamp(40px,6vw,64px)',
        textAlign: 'center',
        boxShadow: '0 12px 40px rgba(30,58,95,0.09)',
        border: '1px solid rgba(30,58,95,0.06)',
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: `linear-gradient(135deg, ${HWT.orange} 0%, ${HWT.orangeDark} 100%)`,
          display: 'grid', placeItems: 'center', margin: '0 auto 24px',
          boxShadow: `0 10px 28px ${HWT.orange}50`,
        }}>
          <HIcon name="check" size={44} color="#fff" />
        </div>
        <h3 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 30, color: HWT.navy, marginBottom: 12 }}>
          تم استلام طلبك بنجاح!
        </h3>
        <p style={{ color: HWT.muted, lineHeight: 1.9, maxWidth: 420, margin: '0 auto 28px', fontSize: 15 }}>
          سيتواصل معك فريقنا خلال{' '}
          <strong style={{ color: HWT.orange }}>30 دقيقة</strong>{' '}
          على رقم{' '}
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: HWT.navy, direction: 'ltr', display: 'inline-block' }}>
            {form.phone}
          </span>{' '}
          لتأكيد التفاصيل وتقديم عرض مخصص.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `linear-gradient(135deg, ${HWT.orange}, ${HWT.orangeDark})`,
            color: '#fff', textDecoration: 'none',
            padding: '14px 32px', borderRadius: 999, fontSize: 15,
            fontFamily: 'Tajawal, sans-serif', fontWeight: 800,
            boxShadow: `0 6px 18px ${HWT.orange}45`,
          }}
        >
          <HIcon name="arrow-right" size={16} color="#fff" />
          العودة للرئيسية
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
          await submitInquiry(form);
          setSubmitted(true);
        } catch {
          setError('حدث خطأ أثناء إرسال الطلب. حاول مجدداً أو تواصل معنا عبر واتساب.');
        } finally {
          setLoading(false);
        }
      }}
      style={{
        background: '#fff', borderRadius: 24,
        padding: 'clamp(24px,4vw,40px)',
        boxShadow: '0 12px 40px rgba(30,58,95,0.08)',
        border: '1px solid rgba(30,58,95,0.06)',
      }}
    >
      {/* ── Form header ── */}
      <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(30,58,95,0.07)' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: `${HWT.orange}18`, borderRadius: 999,
          padding: '5px 14px', marginBottom: 14,
        }}>
          <HIcon name="sparkles" size={12} color={HWT.orange} />
          <span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700, fontSize: 12, color: HWT.orange }}>
            ردّنا خلال 30 دقيقة
          </span>
        </div>
        <h3 style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 26, color: HWT.navy, marginBottom: 6 }}>
          أخبرنا عن رحلتك
        </h3>
        <p style={{ color: HWT.muted, fontSize: 14, lineHeight: 1.75 }}>
          كلما كانت التفاصيل أدق، كان العرض أنسب لك.
        </p>
      </div>

      {/* ── Section 1: Basic info ── */}
      <div style={{ marginBottom: 32 }}>
        <SectionHead icon="user" label="معلوماتك الأساسية" />
        <div className="rg-form" style={{ gap: 16 }}>
          <div>
            <Label required>الاسم الكامل</Label>
            <input
              style={inp}
              placeholder="مثال: أحمد الخالدي"
              value={form.name}
              onChange={e => upd('name', e.target.value)}
              required
            />
          </div>
          <div>
            <Label required hint="سيتواصل معك فريقنا على هذا الرقم">رقم الهاتف</Label>
            <input
              style={{ ...inp, direction: 'ltr', textAlign: 'right' }}
              placeholder="+973 XXXX XXXX"
              value={form.phone}
              onChange={e => upd('phone', e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: Trip details ── */}
      <div style={{ marginBottom: 32 }}>
        <SectionHead icon="plane" label="تفاصيل الرحلة" />

        {/* Destination quick chips */}
        <div style={{ marginBottom: 18 }}>
          <Label>وجهات شائعة — انقر للاختيار</Label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
            {DEST_CHIPS.map(d => (
              <DestChip
                key={d}
                label={d}
                active={form.destination === d}
                onClick={() => upd('destination', form.destination === d ? '' : d)}
              />
            ))}
          </div>
        </div>

        <div className="rg-form" style={{ gap: 16 }}>
          <div>
            <Label required>الوجهة</Label>
            <select
              style={inp}
              value={form.destination}
              onChange={e => upd('destination', e.target.value)}
              required
            >
              <option value="">اختر الوجهة...</option>
              {PACKAGES.map(p => (
                <option key={p.id} value={p.ar}>{p.ar} — {p.en}</option>
              ))}
              <option value="other">وجهة أخرى (أذكرها في الملاحظات)</option>
            </select>
          </div>
          <div>
            <Label required>نوع الطلب</Label>
            <select
              style={inp}
              value={form.reqType}
              onChange={e => upd('reqType', e.target.value)}
              required
            >
              {REQUEST_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <Label>تاريخ السفر المتوقع</Label>
            <input
              type="date"
              style={{ ...inp, direction: 'ltr' }}
              value={form.travelDate}
              onChange={e => upd('travelDate', e.target.value)}
            />
          </div>
          <div>
            <Label>عدد المسافرين</Label>
            <select
              style={inp}
              value={form.travelers}
              onChange={e => upd('travelers', e.target.value)}
            >
              {['1', '2', '3', '4', '5', '6+'].map(n => (
                <option key={n} value={n}>
                  {n} {n === '1' ? 'مسافر' : 'مسافرين'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Section 3: Notes ── */}
      <div style={{ marginBottom: 28 }}>
        <SectionHead icon="sparkles" label="ملاحظات إضافية" />
        <textarea
          style={{ ...inp, minHeight: 110, resize: 'vertical' }}
          placeholder="نوع الغرفة، فئة الفندق، مناسبة خاصة، ميزانية تقريبية، احتياجات خاصة..."
          value={form.notes}
          onChange={e => upd('notes', e.target.value)}
        />
      </div>

      {/* Privacy note */}
      <div style={{
        marginBottom: 24, padding: '14px 16px',
        background: HWT.cream,
        borderRadius: 12,
        borderRight: `3px solid ${HWT.orange}`,
        display: 'flex', gap: 12, alignItems: 'flex-start',
      }}>
        <HIcon name="shield" size={20} color={HWT.orange} />
        <div style={{ fontSize: 13, color: HWT.muted, lineHeight: 1.75 }}>
          <strong style={{ color: HWT.navy }}>خصوصيتك أولوية.</strong>{' '}
          لن نشارك معلوماتك مع أي طرف ثالث. لن تصلك رسائل دعائية.
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div style={{ marginBottom: 16, padding: '12px 16px', background: '#FFF0F0', borderRadius: 10, borderRight: '3px solid #E53E3E', fontSize: 13, color: '#C53030', fontFamily: 'Tajawal, sans-serif' }}>
          {error}
        </div>
      )}

      {/* ── CTAs ── */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            flex: 1, minWidth: 180,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            background: `linear-gradient(135deg, ${HWT.orange} 0%, ${HWT.orangeDark} 100%)`,
            color: '#fff', border: 'none',
            padding: '16px 28px', borderRadius: 999, fontSize: 16,
            fontFamily: 'Tajawal, sans-serif', fontWeight: 800, cursor: 'pointer',
            boxShadow: `0 6px 20px ${HWT.orange}45`,
          opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
          {!loading && <HIcon name="arrow-left" size={18} color="#fff" />}
        </button>
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1, minWidth: 180,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            background: '#fff', color: '#128C7E',
            border: '2px solid #25D366',
            padding: '14px 24px', borderRadius: 999, fontSize: 15,
            fontFamily: 'Tajawal, sans-serif', fontWeight: 800,
            textDecoration: 'none',
          }}
        >
          <HIcon name="whatsapp" size={18} color="#25D366" />
          أرسل عبر واتساب
        </a>
      </div>
    </form>
  );
}
