-- Habilitar la extensión para generar UUIDs si no está activa
create extension if not exists "uuid-ossp";

-- 1. Tabla de Usuarios (extendiendo auth.users)
-- Guarda información del perfil público y mecánicas de gamificación.
create table public.users (
  id uuid references auth.users not null primary key,
  display_name text,
  current_xp integer default 0,
  level integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Row Level Security (RLS) para la tabla users
alter table public.users enable row level security;
create policy "Usuarios pueden ver su propio perfil" on public.users for select using (auth.uid() = id);
create policy "Usuarios pueden actualizar su propio perfil" on public.users for update using (auth.uid() = id);

-- Trigger para crear automáticamente un registro en public.users cuando alguien se registra vía Supabase Auth
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, display_name)
  values (new.id, new.email); -- Usa el email como display_name por defecto
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Tabla de Actividades
-- Soporta métricas de carrera pura y entrenamientos híbridos / noruegos usando JSONB
create table public.activities (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  type text not null check (type in ('Run', 'Hyrox', 'Threshold', 'Recovery', 'Strength')),
  distance_km numeric(5,2),
  duration_interval interval, -- Duración total
  avg_hr integer, -- Frecuencia cardíaca media
  norwegian_metrics jsonb, -- Para guardar datos dinámicos: ej. {"zone2_time_mins": 40, "zone4_time_mins": 15, "lactate_mmol": 2.5}
  xp_earned integer default 0,
  timestamp timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Row Level Security (RLS) para la tabla activities
alter table public.activities enable row level security;
create policy "Usuarios pueden ver sus propias actividades" on public.activities for select using (auth.uid() = user_id);
create policy "Usuarios pueden insertar sus propias actividades" on public.activities for insert with check (auth.uid() = user_id);
create policy "Usuarios pueden actualizar sus propias actividades" on public.activities for update using (auth.uid() = user_id);

-- 3. Tabla de Batallas
-- Controla los combates PvP entre dos corredores
create table public.battles (
  id uuid default uuid_generate_v4() primary key,
  player1_id uuid references public.users(id) on delete cascade not null,
  player2_id uuid references public.users(id) on delete cascade not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  status text check (status in ('pending', 'active', 'completed', 'cancelled')) default 'pending',
  player1_progress numeric(5,2) default 0, -- Progreso en la métrica (ej. km recorridos)
  player2_progress numeric(5,2) default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Row Level Security (RLS) para la tabla battles
alter table public.battles enable row level security;
create policy "Usuarios pueden ver las batallas en las que participan" on public.battles 
  for select using (auth.uid() = player1_id or auth.uid() = player2_id);

-- 4. Tabla de Estadísticas de Usuario (XP y Ligas)
create table public.user_stats (
  user_id uuid references public.users(id) on delete cascade not null primary key,
  current_xp integer default 0,
  level integer default 1,
  league text check (league in ('Bronce', 'Plata', 'Oro', 'Élite')) default 'Bronce',
  weekly_xp_generated integer default 0,
  last_updated timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.user_stats enable row level security;
create policy "Usuarios ven todas las stats para el leaderboard" on public.user_stats for select using (true);
create policy "Solo backend actualiza stats" on public.user_stats for update using (auth.role() = 'service_role');

-- 5. Tabla de Cosméticos Desbloqueables
create table public.cosmetics (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type text check (type in ('avatar', 'border', 'tag')) not null,
  unlock_level integer not null,
  image_url text
);

create table public.user_cosmetics (
  user_id uuid references public.users(id) on delete cascade not null,
  cosmetic_id uuid references public.cosmetics(id) on delete cascade not null,
  equipped boolean default false,
  primary key (user_id, cosmetic_id)
);

alter table public.cosmetics enable row level security;
create policy "Todos ven los cosméticos" on public.cosmetics for select using (true);

alter table public.user_cosmetics enable row level security;
create policy "Usuarios ven cosméticos de otros" on public.user_cosmetics for select using (true);
create policy "Usuarios gestionan sus cosméticos" on public.user_cosmetics for all using (auth.uid() = user_id);
