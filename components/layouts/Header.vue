<template>
  <header class="p-4 max-w-7xl flex mx-auto justify-around items-center">
    <NuxtLink to="/" class="text-lg">hivepal</NuxtLink>

    <div class="flex gap-4 items-center">
      <NuxtLink to="/home">Home</NuxtLink>
      <div>post task</div>
      <div>browse tasks</div>
      <div>faq</div>
    </div>

    <div class="flex gap-4 items-center">
      <Button variant="ghost" @click="toggleTheme" class="relative" size="icon">
        <Icon
          icon="radix-icons:sun"
          class="h-[1rem] w-[1rem] transition-all"
          :class="isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'"
        />
        <Icon
          icon="radix-icons:moon"
          class="absolute h-[1rem] w-[1rem] transition-all"
          :class="isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'"
        />
      </Button>
      <NuxtLink to="/auth/signup">sign up</NuxtLink>
      <NuxtLink to="/auth/login">login</NuxtLink>
      <NuxtLink to="/auth/join">become a pal</NuxtLink>

    </div>

    

  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
const isDark = ref(false)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const updateIsDark = () => {
  isDark.value = colorMode.value === 'dark'
}

onMounted(() => {
  // Set to system preference initially
  colorMode.preference = 'system'
  updateIsDark()
})

watch(() => colorMode.value, updateIsDark)

</script>