<script setup lang="ts">
import { ref } from 'vue'
import DateInput from './DateInput.vue'
import CalendarPopover from './CalendarPopover.vue'
import DatePickerEngine from '../engine/datepicker'

const open = ref(false)
const selectedDate = ref<Date | null>(null)

const engine = new DatePickerEngine(new Date())
const calendar = ref(engine.getCalendar())

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
</script>

<template>
  <div class="relative w-64">
    <DateInput :value="selectedDate" @click="toggle" />

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