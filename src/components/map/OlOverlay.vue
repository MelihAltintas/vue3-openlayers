<template>
  <div ref="htmlContent">
    <slot :position="position"></slot>
  </div>
</template>

<script setup lang="ts">
import useOverlay from '@/composables/useOverlay'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  position?: unknown[],
  offset?: unknown[],
  positioning?: string,
  stopEvent?: boolean,
  insertFirst?: boolean,
  autoPan?: boolean,
  autoPanMargin?: number,
  autoPanAnimation?: Record<string, unknown>,
}>(), {
  stopEvent: true,
  insertFirst: true,
  autoPan: false,
  autoPanMargin: 20,
  autoPanAnimation: undefined,
})

const emit = defineEmits(['elementChanged', 'offsetChanged', 'positionChanged', 'positioningChanged'])

const { properties } = usePropsAsObjectProperties(props)

const overlay = useOverlay(properties, emit)

defineExpose({
  ...overlay,
})

</script>

<style lang="">

</style>
