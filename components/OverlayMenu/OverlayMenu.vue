<template>
  <div ref="target" class="bg-white rounded-md border-black p-3">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const target = ref<HTMLElement | null>(null)

onClickOutside(target, () => emit('close'))
</script>
