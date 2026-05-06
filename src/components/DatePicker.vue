<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DateInput from './DateInput.vue'
import CalendarPopover from './CalendarPopover.vue'
import DatePickerEngine from '../engine/datepicker'

const open = ref(false)
const selectedDate = ref<Date | null>(null)

const engine = new DatePickerEngine(new Date())
const calendar = ref(engine.getCalendar())

const container = ref<HTMLElement | null>(null)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function next() {
  engine.nextMonth()
  calendar.value = engine.getCalendar()
}

function prev() {
  engine.previousMonth()
  calendar.value = engine.getCalendar()
}

function select(date: Date) {
  selectedDate.value = date
  close()
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node

  if (container.value && !container.value.contains(target)) {
    close()
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
  if(event.key === 'Enter' && !open.value) {
    open.value = true
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
 window.addEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="relative w-64" ref="container">
    <DateInput 
      :value="selectedDate" 
      @click="toggle" 
    />

    <CalendarPopover
      v-if="open"
      :calendar="calendar"
      @next="next"
      @prev="prev"
      @select="select"
      @close="close"
    />
    
  </div>
</template>