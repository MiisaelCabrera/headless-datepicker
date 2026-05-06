<script setup lang="ts">
import CalendarDay from './CalendarDay.vue'

defineProps<{
  days: any[]
}>()

defineEmits(['select'])
</script>

<template>
  <div class="grid grid-cols-7 gap-1">
    <CalendarDay
      v-for="day in days"
      :key="day.date.toISOString()"
      :day="day"
      @click="$emit('select', day.date)"
    />
  </div>
</template>