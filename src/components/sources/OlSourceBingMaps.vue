<script setup lang="ts">
import BingMaps from 'ol/source/BingMaps'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from 'vue'
import type TileLayer from 'ol/layer/Tile'
import type TileSource from 'ol/source/Tile'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  cacheSize: number,
  hidpi: boolean,
  culture: string,
  apiKey: string,
  imagerySet: string,
  imageSmoothing: boolean,
  maxZoom: number,
  reprojectionErrorThreshold: number,
  tileLoadFunction: (imageTile: any, src: string) => void,
  wrapX: boolean,
  transition: number,
}>(), {
  hidpi: false,
  culture: 'en-us',
  imageSmoothing: true,
  maxZoom: 21,
  reprojectionErrorThreshold: 0.5,
  tileLoadFunction: (imageTile: any, src: any) => {
    imageTile.getImage().src = src
  },
  wrapX: true,
})

const layer = inject<TileLayer<TileSource>>('tileLayer')

const { properties } = usePropsAsObjectProperties(props)

const source = computed(() => new BingMaps({
  ...properties,
  key: properties.apiKey,
}))

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
