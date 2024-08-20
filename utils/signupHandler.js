import { getSupabase } from '@/utils/supabase'
import { validateSignupForm } from '@/utils/formValidation'

export const handleSignup = async (email, password, confirmPassword) => {
  const validationError = validateSignupForm(email, password, confirmPassword)
  if (validationError) {
    return { error: validationError }
  }

  const supabase = getSupabase()
  if (!supabase) {
    return { error: 'Supabase client is not initialized' }
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error

    // Create user profile
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: data.user.id, email }])
    
    if (profileError) throw profileError

    return { data }
  } catch (error) {
    return { error: error.message }
  }
}