<script setup lang="ts">
import CalendarHeader from './CalendarHeader.vue'
import CalendarGrid from './CalendarGrid.vue'

defineProps<{
  calendar: any
}>()

defineEmits(['next', 'prev', 'select', 'close'])
</script>

<template>
  <div
    class="
      absolute mt-2 w-full
      bg-(--dp-bg)
      border border-(--dp-border)
      rounded-(--dp-radius-md)
      shadow-(--dp-shadow)
      p-4
    "
  >
    
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