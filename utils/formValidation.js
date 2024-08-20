// utils/formValidation.js

export const validateEmail = (email) => {
  if (!email) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format'
  return null
}

export const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 8) return 'Password must be at least 8 characters long'
  return null
}

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Please confirm your password'
  if (password !== confirmPassword) return 'Passwords do not match'
  return null
}

export const validateLoginForm = (email, password) => {
  const emailError = validateEmail(email)
  const passwordError = validatePassword(password)
  
  if (emailError || passwordError) {
    return emailError || passwordError
  }
  
  return null
}

export const validateSignupForm = (email, password, confirmPassword) => {
  const emailError = validateEmail(email)
  const passwordError = validatePassword(password)
  const confirmPasswordError = validateConfirmPassword(password, confirmPassword)
  
  if (emailError || passwordError || confirmPasswordError) {
    return emailError || passwordError || confirmPasswordError
  }
  
  return null
}