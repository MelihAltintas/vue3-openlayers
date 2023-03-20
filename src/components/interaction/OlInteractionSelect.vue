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
import Select from 'ol/interaction/Select'
import Style from 'ol/style/Style'
import type Collection from 'ol/Collection'
import type { Condition } from 'ol/events/condition'
import type Feature from 'ol/Feature'
import type Geometry from 'ol/geom/Geometry'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  multi?: boolean,
  condition?: Condition,
  filter?: () => boolean,
  features?: Collection<Feature<Geometry>>,
  hitTolerance?: number,
  removeCondition?: Condition,
}>(), {
  multi: false,
  hitTolerance: 0,
})
const emit = defineEmits(['select'])

const map = inject<Ref<Map>|null>('map')
const { properties } = usePropsAsObjectProperties(props)

const select = computed(() => {
  // @ts-ignore
  const olSelect = new Select({
    ...properties,
    style: new Style(),
  })

  olSelect.on('select', event => {
    emit('select', event)
  })

  return olSelect
})

watch(select, (newVal, oldVal) => {
  map?.value?.removeInteraction(oldVal)
  map?.value?.addInteraction(newVal)

  map?.value?.changed()
})

onMounted(() => {
  map?.value?.addInteraction(select.value)
})

onUnmounted(() => {
  map?.value?.removeInteraction(select.value)
})

provide('stylable', select)

defineExpose({
  select,
})

</script>
