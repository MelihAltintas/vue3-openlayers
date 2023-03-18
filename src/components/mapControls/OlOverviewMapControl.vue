<template>
<div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import { OverviewMap } from 'ol/control'
import {
  provide,
  inject,
  onMounted,
  onUnmounted, useAttrs,
} from 'vue'
import type Map from 'ol/Map'
import useControl from '@/composables/useControl'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  className?: string,
  collapsed?: boolean,
  collapseLabel?: string,
  collapsible?: boolean,
  label?: string,
  render?: (...args: unknown[]) => unknown,
  rotateWithView?: boolean,
  target?: HTMLElement,
  tipLabel?: string,
}>(), {
  className: 'ol-overviewmap',
  collapsed: true,
  collapseLabel: '«',
  collapsible: true,
  label: '»',
  rotateWithView: false,
  tipLabel: 'Overview map',
})

const attrs = useAttrs()
const { properties } = usePropsAsObjectProperties(props)

const map = inject<Map>('map')

const { control } = useControl(OverviewMap, properties, attrs)

onMounted(() => {
  control.value.setMap(map || null)
})

onUnmounted(() => {
  control.value.setMap(null)
})

provide('overviewMap', control)

defineExpose({
  control,
})

</script>
