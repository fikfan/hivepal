<template>
  <div>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <Label for="email">Email</Label>
        <Input 
          v-model="email" 
          id="email"
          placeholder="Email" 
          :class="{ 'border-red-500': formError }"
        />
      </div>
      <div>
        <Label for="password">Password</Label>
        <Input 
          v-model="password" 
          type="password"
          id="password"
          placeholder="Password" 
          :class="{ 'border-red-500': formError }"
        />
      </div>
      <div>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input 
          v-model="confirmPassword" 
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password" 
          :class="{ 'border-red-500': formError }"
        />
      </div>
      <p v-if="formError" class="text-red-500 text-sm mt-1">{{ formError }}</p>
      <Button type="submit" :disabled="isLoading" class="w-full">
        {{ isLoading ? 'Signing up...' : 'Sign Up' }}
      </Button>
    </form>
    <div class="mt-4 mx-auto">
      Already have an account?
      <span @click="toggleLogin" class="underline cursor-pointer">Log In</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { handleSignup } from '~/utils/signupHandler';

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const formError = ref('')
const isLoading = ref(false)

const emit = defineEmits(['signup-success', 'signup-error'])

const onSubmit = async () => {
  isLoading.value = true
  formError.value = ''

  const { data, error } = await handleSignup(email.value, password.value)

  if (error) {
    formError.value = error
    emit('signup-error', error)
  } else {
    emit('signup-success', 'Logged in successfully!')
  }
  isLoading.value = false
}


const toggleLogin = () => {
  emit('toggle-login')
}
</script>