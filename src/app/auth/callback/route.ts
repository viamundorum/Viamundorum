import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache' // Kifejezetten a menüsor frissítése miatt kell!
import createClient from '@/utils/supabase/server' 

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  
  // Ha sikeres a belépés, dobjuk a /dashboard-ra
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    // A kapott kódot beváltjuk egy érvényes munkamenetre (session) és sütikre
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Frissítjük a teljes oldalstruktúra gyorsítótárát, így a layout.js 
      // azonnal észreveszi az új usert, és átvált a Navbar!
      revalidatePath('/', 'layout')
      
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Hiba esetén visszaküldjük a te valós /auth oldaladra
  return NextResponse.redirect(`${origin}/auth?error=auth-failed`)
}