-- Ha véletlenül már elküldted volna a múltkori oszlopot, ezzel tisztára töröljük
alter table public.profiles drop column if exists role;

-- Létrehozzuk az új oszlopot, ahol az alapértelmezett érték mostantól 'free'
alter table public.profiles add column role text default 'free' not null;