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
  <div class="flex justify-between items-center my-2 text-(--dp-text)">
    
    <button
      @click="$emit('prev')"
      class="
        px-2
        text-(--dp-primary)
        hover:text-(--dp-primary-hover)
      "
    >
      ←
    </button>

    <span class="font-semibold text-(--dp-muted)">
      {{ months[month] }} {{ year }}
    </span>

    <button
      @click="$emit('next')"
      class="
        px-2
        text-(--dp-primary)
        hover:text-(--dp-primary-hover)
      "
    >
      →
    </button>

  </div>
</template>