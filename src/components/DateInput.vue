<script setup lang="ts">
defineProps<{
  value: Date | null
}>()

defineEmits(['click'])

function format(date: Date | null) {
  if (!date) return ''
  return date.toLocaleDateString()
}
</script>

<template>
  <input
    class="w-full border px-3 py-2 rounded-lg  cursor-pointer"
    :value="format(value)"
    readonly
    @click="$emit('click')"
    placeholder="Select a date"
  />
</template>