<script setup lang="ts">
defineProps<{
  month: number
  year: number
}>()

defineEmits(['next', 'prev'])

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]
</script>

<template>
  <div class="flex justify-between items-center my-2">
    <button @click="$emit('prev')" class="px-2">←</button>

    <span class="font-semibold text-gray-600">
      {{ months[month] }} {{ year }}
    </span>

    <button @click="$emit('next')" class="px-2">→</button>
  </div>
</template>