'use server';

import { supabase, supabaseAdmin, type Inquiry } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function submitInquiry(data: {
  name: string;
  phone: string;
  destination: string;
  reqType: string;
  travelDate: string;
  travelers: string;
  notes: string;
}) {
  const { error } = await supabase.from('inquiries').insert({
    name:        data.name,
    phone:       data.phone,
    destination: data.destination,
    req_type:    data.reqType,
    travel_date: data.travelDate || null,
    travelers:   data.travelers,
    notes:       data.notes || null,
    status:      'new',
  });

  if (error) throw new Error(error.message);
}

// ── Admin actions ──────────────────────────────────────────────

export async function adminLogin(password: string): Promise<boolean> {
  const correct = process.env.ADMIN_PASSWORD ?? 'hwt-admin-2026';
  if (password !== correct) return false;
  const cookieStore = await cookies();
  cookieStore.set('hwt_admin', correct, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });
  return true;
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete('hwt_admin');
}

export async function getInquiries(): Promise<Inquiry[]> {
  const admin = supabaseAdmin();
  const { data, error } = await admin
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Inquiry[];
}

export async function updateStatus(id: string, status: Inquiry['status']) {
  const admin = supabaseAdmin();
  const { error } = await admin
    .from('inquiries')
    .update({ status })
    .eq('id', id);
  if (error) throw new Error(error.message);
}
