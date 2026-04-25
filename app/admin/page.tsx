import { cookies } from 'next/headers';
import { getInquiries } from '@/app/actions/inquiries';
import type { Inquiry } from '@/lib/supabase';
import AdminClient from './AdminClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token       = cookieStore.get('hwt_admin')?.value;
  const correct     = process.env.ADMIN_PASSWORD ?? 'hwt-admin-2026';
  const isLoggedIn  = token === correct;

  let data: Inquiry[] = [];
  if (isLoggedIn) {
    try { data = await getInquiries(); } catch { /* env not set yet */ }
  }

  return <AdminClient initialData={data} isLoggedIn={isLoggedIn} />;
}
