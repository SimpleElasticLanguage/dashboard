<script setup lang="ts">
import { onMounted, ref } from 'vue'
import apiClient from '@/api-client'
import Dropdown from 'primevue/dropdown'
import router from '@/router'

const listIndex = ref(null)
const selectedIndex = defineModel()

onMounted(() => {
  apiClient.indexes.get().then((indexPayload) => {
    listIndex.value = indexPayload.indexes
  })
})

function updateUrlQueryParams() {
  router.push({ path: '/', query: { selectedIndex: selectedIndex.value } })
}
</script>

<template>
  <Dropdown
    v-model="selectedIndex"
    :options="listIndex"
    option-label="index"
    option-value="index"
    class="w-full"
    placeholder="Select an index"
    v-on:change="updateUrlQueryParams"
  />
</template>
