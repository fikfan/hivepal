<template>
  <div class="max-w-lg mx-auto">
    <LoginForm v-if="showLogin" @toggle-signup="toggleForm" />
    <SignupForm v-else @toggle-login="toggleForm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'
import SignupForm from './SignupForm.vue'

const showLogin = ref(true)

const toggleForm = () => {
  showLogin.value = !showLogin.value
}
</script>