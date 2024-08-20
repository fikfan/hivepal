<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <Input 
        v-model="email" 
        id="email" 
        placeholder="Email" 
        class="mb-4"/>
      </div>
      
      <div>
        <Input 
        v-model="password" 
        type="password"
        id="password" 
        placeholder="Password" 
        class="mb-4"/>
      </div>
      <p v-if="formError" class="text-red-500 text-sm my-2">{{ formError }}</p>
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
import { handleLogin } from '~/utils/loginHandler';

// const { $supabase } = useNuxtApp()

const isLoading = ref(false)
const email = ref('')
const formError = ref('')
const password = ref('')

const emit = defineEmits(['login-success', 'login-error'])


const onSubmit = async () => {
  isLoading.value = true
  formError.value = ''

  const { data, error } = await handleLogin(email.value, password.value)

  if (error) {
    formError.value = error
    emit('login-error', error)
  } else {
    emit('login-success', 'Logged in successfully!')
  }

  isLoading.value = false
}

const toggleSignup = () => {
  emit('toggle-signup')
}
</script>