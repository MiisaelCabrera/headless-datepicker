<script setup lang="ts">
import CalendarHeader from './CalendarHeader.vue'
import CalendarGrid from './CalendarGrid.vue'

defineProps<{
  calendar: any
}>()

defineEmits(['next', 'prev', 'select', 'close'])
</script>

<template>
  <div class="absolute mt-2 bg-white border rounded shadow p-4 w-full">
    
    <CalendarHeader
      :month="calendar.month"
      :year="calendar.year"
      @next="$emit('next')"
      @prev="$emit('prev')"
    />

    <CalendarGrid
      :days="calendar.days"
      @select="$emit('select', $event)"
    />
    
  </div>
</template>