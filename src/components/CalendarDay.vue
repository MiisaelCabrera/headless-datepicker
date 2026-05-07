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
    class="
      p-2 text-sm rounded-(--dp-radius-sm)
      transition
    "
    :class="[
      day.currentMonth
        ? 'text-(--dp-text)'
        : 'text-(--dp-muted)',
      'hover:bg-(--dp-hover)'
    ]"
  >
    {{ day.day }}
  </button>
</template>