<script setup lang="ts">
defineProps<{
  day: {
    date: Date
    day: number
    currentMonth: boolean
  }
}>()

defineEmits(['click'])
</script>

<template>
  <button
    @click="$emit('click')"
    class="p-2 text-sm rounded hover:bg-blue-100"
    :class="[
      day.currentMonth ? 'text-black' : 'text-gray-500'
    ]"
  >
    {{ day.day }}
  </button>
</template>