<script setup lang="ts">
import { RouterView } from 'vue-router'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import IndexSelector from '@/components/index-selector/index-selector.vue'
</script>

<template>
  <header>
    <IndexSelector />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background-color: var(--vt-c-white-mute);
}
</style>
