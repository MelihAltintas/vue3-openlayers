<script setup lang="ts">
import type { IconAnchorUnits, IconOrigin } from 'ol/style/Icon'
import Icon from 'ol/style/Icon'

import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import type Style from 'ol/style/Style'
import type Draw from 'ol/interaction/Draw'
import type Modify from 'ol/interaction/Modify'
import type { Size } from 'ol/size'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  anchor?: number[],
  anchorOrigin?: IconOrigin,
  anchorXUnits?: IconAnchorUnits,
  color?: string,
  crossOrigin?: string,
  img?: HTMLImageElement | HTMLCanvasElement,
  offset?: [number, number],
  displacement?: [number, number],
  offsetOrigin?: IconOrigin,
  opacity?: number,
  scale?: number,
  rotateWithView?: boolean,
  rotation?: number,
  size?: Size,
  imgSize?: Size,
  src?: string,
}>(), {
  anchorOrigin: 'top-left',
  anchorXUnits: 'fraction',
  offset: () => [0, 0],
  displacement: () => [0, 0],
  offsetOrigin: 'top-left',
  opacity: 1,
  scale: 1,
  rotateWithView: false,
  rotation: 0,
})

const style = inject<Style|null>('style', null)
const styledObj = inject<Draw|Modify|Style|null>('styledObj', null)

const { properties } = usePropsAsObjectProperties(props)

const icon = computed(() => {
  const ic = new Icon(properties)
  ic.load()
  return ic
})

const applyStyle = () => {
  // @ts-ignore
  style?.setImage(null)
  style?.setImage(icon.value)
  // @ts-ignore
  styledObj?.changed()
}

watch(properties, () => {
  applyStyle()
})

watch(() => style, () => {
  applyStyle()
})

onMounted(() => {
  style?.setImage(icon.value)
})

onUnmounted(() => {
  // @ts-ignore
  style?.setImage(null)
})
</script>
