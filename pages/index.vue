<template>
  <div>
    Homepage
    <Button>Button</Button>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig();

const supabase = createClient(config.public.supaUrl, config.public.supaKey)
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>