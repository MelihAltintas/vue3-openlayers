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
  toRefs,
} from 'vue'
import Draw from 'ol/interaction/Draw'
import type Map from 'ol/Map'
import type VectorSource from 'ol/source/Vector'
import type { Type as GeometryType } from 'ol/geom/Geometry'
import type { GeometryFunction } from 'ol/interaction/Draw'
import type { Condition } from 'ol/events/condition'

const props = withDefaults(defineProps<{
  type: GeometryType,
  clickTolerance?: number,
  dragVertexDelay?: number,
  snapTolerance?: number,
  stopClick?: boolean,
  maxPoints?: number,
  minPoints?: number,
  finishCondition?: () => boolean,
  geometryFunction?: GeometryFunction,
  geometryName?: string,
  condition?: () => boolean,
  freehand?: boolean,
  freehandCondition?: Condition,
  wrapX?: boolean,
}>(), {
  clickTolerance: 6,
  dragVertexDelay: 500,
  snapTolerance: 12,
  stopClick: false,
  freehand: false,
  wrapX: false,
})

const emit = defineEmits(['drawstart', 'drawend'])

const map = inject<Map>('map')
const source = inject<VectorSource>('vectorSource')

const {
  type,
  clickTolerance,
  dragVertexDelay,
  snapTolerance,
  stopClick,
  maxPoints,
  minPoints,
  finishCondition,
  geometryFunction,
  geometryName,
  condition,
  freehand,
  freehandCondition,
  wrapX,
} = toRefs(props)

const createDraw = () => {
  const draw = new Draw({
    source,
    type: type.value,
    clickTolerance: clickTolerance.value,
    dragVertexDelay: dragVertexDelay.value,
    snapTolerance: snapTolerance.value,
    stopClick: stopClick.value,
    maxPoints: maxPoints?.value,
    minPoints: minPoints?.value,
    finishCondition: finishCondition?.value,
    geometryFunction: geometryFunction?.value,
    geometryName: geometryName?.value,
    condition: condition?.value,
    freehand: freehand.value,
    freehandCondition: freehandCondition?.value,
    wrapX: wrapX.value,
  })

  draw.on('drawstart', event => {
    emit('drawstart', event)
  })

  draw.on('drawend', event => {
    emit('drawend', event)
  })

  return draw
}

let draw = createDraw()

watch([
  type,
  clickTolerance,
  dragVertexDelay,
  snapTolerance,
  stopClick,
  maxPoints,
  minPoints,
  finishCondition,
  geometryFunction,
  geometryName,
  condition,
  freehand,
  freehandCondition,
  wrapX,
], () => {
  map?.removeInteraction(draw)
  draw = createDraw()
  map?.addInteraction(draw)
  draw.changed()
  map?.changed()
})

onMounted(() => {
  map?.addInteraction(draw)
})

onUnmounted(() => {
  map?.removeInteraction(draw)
})

provide('stylable', draw)

</script>
