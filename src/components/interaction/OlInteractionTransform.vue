<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import Transform from 'ol-ext/interaction/Transform'
import type { Condition } from 'ol/events/condition'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  enableRotatedTransform?: boolean,
  condition?: Condition,
  addCondition?: Condition,
  filter?: () => boolean,
  layers?: unknown[],
  hitTolerance?: number,
  translateFeature?: boolean,
  scale?: boolean,
  rotate?: boolean,
  keepAspectRatio?: boolean,
  translate?: boolean,
  stretch?: boolean,
}>(), {
  enableRotatedTransform: false,
  hitTolerance: 2,
  translateFeature: true,
  scale: true,
  rotate: true,
  keepAspectRatio: false,
  translate: true,
  stretch: true,
})

const map = inject<Ref<Map>|null>('map')

const { properties } = usePropsAsObjectProperties(props)

const transform = computed(() => {
  // @ts-ignore
  const olTransform = new Transform({
    ...properties,
  })

  return olTransform
})

watch(transform, (newVal, oldVal) => {
  map?.value?.removeInteraction(oldVal)
  map?.value?.addInteraction(newVal)

  map?.value?.changed()
})

onMounted(() => {
  map?.value?.addInteraction(transform.value)
})

onUnmounted(() => {
  map?.value?.removeInteraction(transform.value)
})

provide('stylable', transform)

</script>
