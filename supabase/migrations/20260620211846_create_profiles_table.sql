-- EZT AZ EGY SORT ADD HOZZÁ LEGFELÜLRE:
drop table if exists public.profiles cascade;

-- 1. LÉTREHOZZUK A PROFILOK TÁBLÁT
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  xp integer default 0,
  current_title text default 'Novícius',
  
  constraint username_length check (char_length(username) >= 3)
);

-- 2. BEKAPCSOLJUK A ROW LEVEL SECURITY-T (RLS)
alter table public.profiles enable row level security;

-- 3. BIZTONSÁGI SZABÁLYOK (POLICIES) DEFINIÁLÁSA
-- Bárki láthatja a profilokat (pl. későbbi toplistákhoz)
create policy "A profilok nyilvánosan olvashatóak." on public.profiles
  for select using (true);

-- Csak a bejelentkezett felhasználó módosíthatja a saját profilját (pl. névváltás)
create policy "A felhasználók frissíthetik a saját profiljukat." on public.profiles
  for update using (auth.uid() = id);

-- 4. AUTOMATIKUS TRIGGER FÜGGVÉNY REGISZTRÁCIÓHOZ
-- Amikor új felhasználó jön létre az auth.users-ben, ez a függvény automatikusan lefut
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'name', 'Játékos_' || substr(new.id::text, 1, 5)),
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'subscribe_status',
    new.raw_user_meta_data->>'worlds_open'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Összekötjük a függvényt az auth.users táblával
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();