<script setup lang="ts">
import OSM from 'ol/source/OSM'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import type TileSource from 'ol/source/Tile'
import type TileLayer from 'ol/layer/Tile'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  attributions?: string,
  cacheSize?: number,
  crossOrigin?: string,
  imageSmoothing?: boolean,
  minZoom?: number,
  maxZoom?: number,
  opaque?: boolean,
  reprojectionErrorThreshold?: number,
  transition?: number,
  url?: string,
  wrapX?: boolean,
}>(), {
  cacheSize: 2048,
  crossOrigin: 'anonymous',
  imageSmoothing: true,
  minZoom: 0,
  maxZoom: 19,
  opaque: true,
  reprojectionErrorThreshold: 0.5,
  transition: 250,
  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  wrapX: true,
})

const layer = inject<TileLayer<TileSource>>('tileLayer')

const {
  properties,
} = usePropsAsObjectProperties(props)

const source = computed(() => new OSM(properties))

watch(source, () => {
  layer?.setSource(source.value)
})

watch(() => layer, () => {
  layer?.setSource(source.value)
})

onMounted(() => {
  layer?.setSource(source.value)
})

onUnmounted(() => {
  layer?.setSource(null)
})

defineExpose({
  layer,
  source,
})
</script>