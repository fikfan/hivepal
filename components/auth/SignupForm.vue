<template>
  <div>
    <form @submit.prevent="handleSignup">
      <Input v-model="email" type="email" placeholder="Email" required class="mb-4"/>
      <Input v-model="password" type="password" placeholder="Password" required class="mb-4" />
      <Input v-model="confirmPassword" type="password" placeholder="Confirm Password" required class="mb-4" />
      <Button type="submit" class="w-full">Sign Up</Button>
    </form>
    <div class="mt-4 mx-auto">
      Already have an account?
      <span @click="toggleLogin" class="underline cursor-pointer">Log In</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { $supabase } = useNuxtApp()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const emit = defineEmits(['toggle-login'])

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    console.error('Passwords do not match')
    return
  }

  try {
    const { data, error } = await $supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
    console.log('User signed up:', data)
    // Here you might want to redirect the user or update the UI
  } catch (error) {
    console.error('Error signing up:', error.message)
    // Here you might want to show an error message to the user
  }
}

const toggleLogin = () => {
  emit('toggle-login')
}
</script>