import { NextResponse } from 'next/server'
import createClient from '@/utils/supabase/server' // A szerver-oldali Supabase kliensed

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // Ha volt megadva konkrét oldal (pl. /profil), oda küldjük, ha nem, a főoldalra (/)
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    // A kapott kódot beváltjuk egy érvényes munkamenetre (session) és sütikre
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Ha valami hiba történt, visszaküldjük a hibaüzenettel a belépőre
  return NextResponse.redirect(`${origin}/login?error=auth-failed`)
}