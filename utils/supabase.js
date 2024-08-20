// utils/supabase.js
import { createClient } from '@supabase/supabase-js'
let supabase = null

export function getSupabase() {
  if (supabase) return supabase

  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL and Key are required')
    return null
  }

  supabase = createClient(supabaseUrl, supabaseKey)
  return supabase
}
// For development/testing, you can use the mock version:
// import { mockSupabase as supabase } from './mockSupabase'
// export { supabase }