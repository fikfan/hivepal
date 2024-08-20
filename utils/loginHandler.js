// handlers/loginHandler.js

import { getSupabase } from '@/utils/supabase'
import { validateLoginForm } from '@/utils/formValidation'

export const handleLogin = async (email, password) => {
  const validationError = validateLoginForm(email, password)
  if (validationError) {
    return { error: validationError }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return { error: 'Supabase client is not initialized' }
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return { data }
  } catch (error) {
    return { error: error.message }
  }
}