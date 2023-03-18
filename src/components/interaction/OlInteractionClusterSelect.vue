<template>
  <slot></slot>
</template>

<script setup lang="ts">
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import Select from 'ol-ext/interaction/SelectCluster'
import Style from 'ol/style/Style'
import type Map from 'ol/Map'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  multi?: boolean,
  condition?: () => boolean,
  filter?: () => boolean,
  pointRadius?: number,
  animate?: boolean,
  featureStyle?: () => Record<string, unknown>,
  style?: () => Record<string, unknown>,
}>(), {
  multi: false,
  pointRadius: 7,
  animate: true,
})

const emit = defineEmits(['select'])

const map = inject<Map>('map')

const {
  properties,
} = usePropsAsObjectProperties(props)

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
  map?.removeInteraction(oldVal)
  map?.addInteraction(newVal)

  map?.changed()
})

onMounted(() => {
  map?.addInteraction(select.value)
})

onUnmounted(() => {
  map?.removeInteraction(select.value)
})

provide('stylable', select)

</script>
