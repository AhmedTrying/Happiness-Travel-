import { createClient } from '@supabase/supabase-js';

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const svc  = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Browser-safe client (used in client components / API routes for inserts)
export const supabase = createClient(url, anon);

// Server-only client with full access (used in admin server actions)
export function supabaseAdmin() {
  if (!svc) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set');
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
