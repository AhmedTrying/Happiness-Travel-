'use client';

import { useState, useTransition } from 'react';
import { adminLogin, adminLogout, updateStatus } from '@/app/actions/inquiries';
import { HWT } from '@/lib/theme';
import type { Inquiry } from '@/lib/supabase';

const STATUS_LABEL: Record<Inquiry['status'], string> = {
  new:       'جديد',
  contacted: 'تم التواصل',
  closed:    'مغلق',
};

const STATUS_COLOR: Record<Inquiry['status'], string> = {
  new:       '#F5A524',
  contacted: '#3B82F6',
  closed:    '#6B7280',
};

function Badge({ status }: { status: Inquiry['status'] }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px', borderRadius: 999, fontSize: 12,
      fontFamily: 'Tajawal, sans-serif', fontWeight: 700,
      background: `${STATUS_COLOR[status]}20`,
      color: STATUS_COLOR[status],
      border: `1px solid ${STATUS_COLOR[status]}50`,
    }}>
      {STATUS_LABEL[status]}
    </span>
  );
}

function LoginForm() {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [pending, startTransition] = useTransition();

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: HWT.navyDeep }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: 40, width: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900, fontSize: 22, color: HWT.navy }}>
            لوحة الإدارة
          </div>
          <div style={{ fontSize: 13, color: HWT.muted, marginTop: 4 }}>Happiness World Travel</div>
        </div>
        <form onSubmit={e => {
          e.preventDefault();
          setErr('');
          startTransition(async () => {
            const ok = await adminLogin(pw);
            if (!ok) setErr('كلمة المرور غير صحيحة');
            else window.location.reload();
          });
        }}>
          <input
            type="password"
            placeholder="كلمة المرور"
            value={pw}
            onChange={e => setPw(e.target.value)}
            style={{
              width: '100%', padding: '12px 14px', borderRadius: 10,
              border: `1.5px solid ${err ? '#E53E3E' : 'rgba(30,58,95,0.15)'}`,
              fontSize: 15, fontFamily: 'Tajawal, sans-serif', marginBottom: 12, display: 'block',
            }}
            required
          />
          {err && <div style={{ color: '#E53E3E', fontSize: 13, marginBottom: 10, fontFamily: 'Tajawal, sans-serif' }}>{err}</div>}
          <button type="submit" disabled={pending} style={{
            width: '100%', padding: '13px', borderRadius: 999, border: 'none',
            background: `linear-gradient(135deg, ${HWT.orange}, ${HWT.orangeDark})`,
            color: '#fff', fontSize: 15, fontFamily: 'Tajawal, sans-serif', fontWeight: 800,
            cursor: pending ? 'not-allowed' : 'pointer', opacity: pending ? 0.7 : 1,
          }}>
            {pending ? 'جاري التحقق...' : 'دخول'}
          </button>
        </form>
      </div>
    </div>
  );
}

function StatusSelect({ inquiry, onUpdate }: { inquiry: Inquiry; onUpdate: (id: string, s: Inquiry['status']) => void }) {
  const [pending, startTransition] = useTransition();
  return (
    <select
      value={inquiry.status}
      disabled={pending}
      onChange={e => {
        const s = e.target.value as Inquiry['status'];
        startTransition(async () => {
          await updateStatus(inquiry.id, s);
          onUpdate(inquiry.id, s);
        });
      }}
      style={{
        padding: '5px 10px', borderRadius: 8, fontSize: 12,
        border: `1px solid ${STATUS_COLOR[inquiry.status]}60`,
        background: `${STATUS_COLOR[inquiry.status]}10`,
        color: STATUS_COLOR[inquiry.status],
        fontFamily: 'Tajawal, sans-serif', fontWeight: 700, cursor: 'pointer',
      }}
    >
      <option value="new">جديد</option>
      <option value="contacted">تم التواصل</option>
      <option value="closed">مغلق</option>
    </select>
  );
}

export default function AdminClient({ initialData, isLoggedIn }: { initialData: Inquiry[]; isLoggedIn: boolean }) {
  const [inquiries, setInquiries] = useState(initialData);
  const [filter, setFilter] = useState<'all' | Inquiry['status']>('all');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (!isLoggedIn) return <LoginForm />;

  const counts = {
    all:       inquiries.length,
    new:       inquiries.filter(i => i.status === 'new').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    closed:    inquiries.filter(i => i.status === 'closed').length,
  };

  const visible = inquiries.filter(i => {
    if (filter !== 'all' && i.status !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return i.name.toLowerCase().includes(q) || i.phone.includes(q) || i.destination?.toLowerCase().includes(q);
    }
    return true;
  });

  const updateLocal = (id: string, status: Inquiry['status']) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('ar-BH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F3F7FD', direction: 'rtl', fontFamily: 'Tajawal, sans-serif' }}>

      {/* Top bar */}
      <div style={{ background: HWT.navyDeep, color: '#fff', padding: '0 clamp(16px,3vw,32px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <div style={{ fontWeight: 900, fontSize: 18 }}>
          لوحة الإدارة — <span style={{ color: HWT.orange, fontFamily: 'Poppins, sans-serif', fontSize: 14 }}>Happiness World Travel</span>
        </div>
        <button
          onClick={() => startTransition(async () => { await adminLogout(); window.location.reload(); })}
          disabled={pending}
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '7px 18px', borderRadius: 999, fontSize: 13, fontFamily: 'Tajawal, sans-serif', fontWeight: 700, cursor: 'pointer' }}
        >
          خروج
        </button>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(20px,3vw,40px) clamp(16px,3vw,32px)' }}>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 28 }}>
          {([['all', 'الكل', '#1E3A5F'], ['new', 'جديد', HWT.orange], ['contacted', 'تم التواصل', '#3B82F6'], ['closed', 'مغلق', '#6B7280']] as const).map(([key, label, color]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                background: filter === key ? color : '#fff',
                color: filter === key ? '#fff' : HWT.ink,
                border: `2px solid ${filter === key ? color : 'rgba(30,58,95,0.08)'}`,
                borderRadius: 16, padding: '18px 20px', textAlign: 'right',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: filter === key ? '#fff' : color }}>
                {counts[key]}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: filter === key ? 0.9 : 0.65 }}>{label}</div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginBottom: 20 }}>
          <input
            placeholder="بحث بالاسم أو الهاتف أو الوجهة..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px', borderRadius: 12,
              border: '1.5px solid rgba(30,58,95,0.12)', background: '#fff',
              fontSize: 14, fontFamily: 'Tajawal, sans-serif', display: 'block',
            }}
          />
        </div>

        {/* Table */}
        <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(30,58,95,0.07)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(30,58,95,0.06)' }}>
          {visible.length === 0 ? (
            <div style={{ padding: 48, textAlign: 'center', color: HWT.muted, fontSize: 15 }}>
              لا توجد طلبات
            </div>
          ) : visible.map((inq, i) => (
            <div key={inq.id}>
              {/* Row */}
              <div
                onClick={() => setExpanded(expanded === inq.id ? null : inq.id)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 140px 130px 120px 100px',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 24px',
                  borderBottom: i < visible.length - 1 || expanded === inq.id ? '1px solid rgba(30,58,95,0.07)' : 'none',
                  cursor: 'pointer',
                  background: expanded === inq.id ? '#F8FAFE' : '#fff',
                  transition: 'background 0.1s',
                }}
              >
                {/* Name + phone */}
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: HWT.navy }}>{inq.name}</div>
                  <div style={{ fontSize: 13, color: HWT.muted, fontFamily: 'Poppins, sans-serif', direction: 'ltr', textAlign: 'right', marginTop: 2 }}>{inq.phone}</div>
                </div>
                {/* Destination */}
                <div style={{ fontSize: 14, fontWeight: 700, color: HWT.ink }}>{inq.destination || '—'}</div>
                {/* Type */}
                <div style={{ fontSize: 13, color: HWT.muted }}>{inq.req_type}</div>
                {/* Date */}
                <div style={{ fontSize: 12, color: HWT.muted }}>{fmtDate(inq.created_at)}</div>
                {/* Status */}
                <div onClick={e => e.stopPropagation()}>
                  <StatusSelect inquiry={inq} onUpdate={updateLocal} />
                </div>
              </div>

              {/* Expanded detail */}
              {expanded === inq.id && (
                <div style={{ padding: '20px 24px 24px', background: '#F8FAFE', borderBottom: '1px solid rgba(30,58,95,0.07)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px 24px', marginBottom: 16 }}>
                    {[
                      ['الاسم الكامل', inq.name],
                      ['رقم الهاتف', inq.phone],
                      ['الوجهة', inq.destination],
                      ['نوع الطلب', inq.req_type],
                      ['تاريخ السفر', inq.travel_date || 'غير محدد'],
                      ['عدد المسافرين', inq.travelers],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div style={{ fontSize: 11, color: HWT.muted, fontWeight: 700, marginBottom: 3 }}>{label}</div>
                        <div style={{ fontSize: 14, color: HWT.navy, fontWeight: 600 }}>{value}</div>
                      </div>
                    ))}
                  </div>
                  {inq.notes && (
                    <div>
                      <div style={{ fontSize: 11, color: HWT.muted, fontWeight: 700, marginBottom: 4 }}>ملاحظات</div>
                      <div style={{ fontSize: 14, color: HWT.ink, background: '#fff', padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(30,58,95,0.08)', lineHeight: 1.7 }}>
                        {inq.notes}
                      </div>
                    </div>
                  )}
                  {/* Quick actions */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${inq.phone.replace(/\s/g, '')}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 999, background: `${HWT.orange}15`, color: HWT.orange, textDecoration: 'none', fontSize: 13, fontWeight: 700, border: `1px solid ${HWT.orange}40` }}
                    >
                      📞 اتصال
                    </a>
                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 999, background: '#25D36615', color: '#25D366', textDecoration: 'none', fontSize: 13, fontWeight: 700, border: '1px solid #25D36640' }}
                    >
                      واتساب
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', color: HWT.muted, fontSize: 12, marginTop: 24 }}>
          إجمالي الطلبات المعروضة: {visible.length}
        </div>

      </div>
    </div>
  );
}
