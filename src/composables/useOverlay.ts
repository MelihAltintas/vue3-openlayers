import type { PanIntoViewOptions, Positioning } from 'ol/Overlay'
import Overlay from 'ol/Overlay'
import {
  inject,
  ref,
  watchEffect,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'

import type Map from 'ol/Map'
import type { Coordinate } from 'ol/coordinate'

export default function useOverlay(
  properties: Record<string, unknown>,
  emit: (ev: ('elementChanged'|'offsetChanged'|'positionChanged'|'positioningChanged'), ...args: any[]) => void,
) {
  const map = inject<Map>('map')

  const htmlContent = ref<HTMLElement|undefined>(undefined)

  const overlay = computed(() => new Overlay(properties))

  onMounted(() => {
    map?.addOverlay(overlay.value)
  })

  onUnmounted(() => {
    map?.removeOverlay(overlay.value)
  })

  const getElement = () => overlay.value.getElement()
  const getOffset = () => overlay.value.getOffset()
  const getPosition = () => overlay.value.getPosition()
  const getPositioning = () => overlay.value.getPositioning()
  const panIntoView = (optPanIntoViewOptions: PanIntoViewOptions) => overlay.value.panIntoView(optPanIntoViewOptions)
  const setElement = (element: HTMLElement|undefined) => overlay.value.setElement(element)
  const setOffset = (offset: number[]) => overlay.value.setOffset(offset)
  const setPosition = (position?: Coordinate) => overlay.value.setPosition(position)
  const setPositioning = (positioning: Positioning) => overlay.value.setPositioning(positioning)

  overlay.value.on('change:element', () => emit('elementChanged', getElement()))
  overlay.value.on('change:offset', () => emit('offsetChanged', getOffset()))
  overlay.value.on('change:position', () => emit('positionChanged', getPosition()))
  overlay.value.on('change:positioning', () => emit('positioningChanged', getPositioning()))

  watch(overlay, (newVal, oldVal) => {
    map?.removeOverlay(oldVal)
    map?.addOverlay(newVal)
  })

  watchEffect(() => {
    setElement(htmlContent.value)
  }, {
    flush: 'post',
  })

  return {
    overlay,
    htmlContent,
    getOffset,
    getPosition,
    getPositioning,
    panIntoView,
    setElement,
    setOffset,
    setPosition,
    setPositioning,
  }
}
