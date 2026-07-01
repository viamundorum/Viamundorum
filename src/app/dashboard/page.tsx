import  createClient  from '@/utils/supabase/server'

export default async function Dashboard() {
  // 1. Kapcsolódunk a Supabase-hez
  const supabase = await createClient()
  
  // 2. Kikérjük a pontosan meglévő oszlopokat (full_name és role)
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .single()

  return (
    <div className="p-8 max-w-md mx-auto bg-slate-900 text-white rounded-xl shadow-md space-y-4 mt-10 border border-amber-500/20">
      <h1 className="text-2xl font-bold text-amber-400">
        Üdvözlünk, {profile?.full_name ?? 'Felfedező'}!
      </h1>
      <div className="text-slate-300 space-y-1">
        <p>Felhasználói státusz: <span className="font-semibold text-emerald-400 capitalize">
          {profile?.role ?? 'Ingyenes'}
        </span></p>
      </div>
    </div>
  )
}