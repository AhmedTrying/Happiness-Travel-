import { createClient } from '@supabase/supabase-js';

// Lazy getters so clients are never created at module-evaluation time
// (avoids "supabaseUrl is required" crash during Next.js build on Vercel)
export function supabase() {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error('Supabase public env vars not set');
  return createClient(url, anon);
}

export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !svc) throw new Error('Supabase service role env vars not set');
  return createClient(url, svc, { auth: { persistSession: false } });
}

export type Inquiry = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  destination: string;
  req_type: string;
  travel_date: string | null;
  travelers: string;
  notes: string | null;
  status: 'new' | 'contacted' | 'closed';
};
