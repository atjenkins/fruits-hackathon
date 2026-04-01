import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
  Supabase table setup — run this in the SQL editor:

  create table registrations (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null unique,
    team_preference text not null,
    experience text not null,
    project_idea text,
    created_at timestamptz default now()
  );

  -- Enable RLS
  alter table registrations enable row level security;

  -- Allow inserts from anon
  create policy "Allow public inserts" on registrations
    for insert with check (true);
*/
