<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div>
        <Input 
        v-model="email" 
        type="email"
        id="email" 
        placeholder="Email" 
        required
        :class="{ 'border-red-500': errors.email }" 
        class="mb-4"/>
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
      </div>
      
      <div>
        <Input 
        v-model="password" 
        type="password"
        id="password" 
        placeholder="Password" 
        :class="{ 'border-red-500': errors.password }" 
        required 
        class="mb-4"/>
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
      </div>
      
      <Button type="submit" class="w-full" :disabled="isLoading">{{ isLoading ? 'Logging in...' : 'Log In' }}</Button>
    </form>
    <div class="mx-auto mt-4">
      Don't have an account? 
      <button @click="toggleSignup" class="underline">Sign Up</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockSupabase } from '~/utils/mockSupabase';

// const { $supabase } = useNuxtApp()

const isLoading = ref(false)
const errors = reactive({})
const email = ref('')
const password = ref('')

// const emit = defineEmits(['toggle-signup'])
const emit = defineEmits(['login-success', 'login-error'])

const validateForm = () => {
  errors.email = !email.value ? 'Email is required' : 
                 !/^[^\s@]+@[^\s@]+$/.test(email.value) ? 'Invalid email format' : ''
  errors.password = !password.value ? 'Password is required' : ''
  return Object.values(errors).every(val => val === '')
}

// const handleLogin = async () => {
//   try {
//     const { data, error } = await $supabase.auth.signInWithPassword({
//       email: email.value,
//       password: password.value,
//     })
//     if (error) throw error
//     console.log('User logged in:', data)
//     // Here you might want to redirect the user or update the UI
//   } catch (error) {
//     console.error('Error logging in:', error.message)
//     // Here you might want to show an error message to the user
//   }
// }

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const { data, error } = await mockSupabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
    console.log('success')
    emit('login-success', 'Logged in successfully!')
  } catch (error) {
    console.log('something wong')
    emit('login-error', error.message || 'An error occurred during login')
  } finally {
    isLoading.value = false
  }
}

const toggleSignup = () => {
  emit('toggle-signup')
}
</script>