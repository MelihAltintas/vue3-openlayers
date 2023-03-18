<script setup lang="ts">
import ImageWMS from 'ol/source/ImageWMS'
import type { Options as ProjectionOptions } from 'ol/proj/Projection'
import Projection from 'ol/proj/Projection'
import {
  inject,
  onMounted,
  onUnmounted,
  watch,
} from 'vue'
import type { Extent } from 'ol/extent'
import type ImageLayer from 'ol/layer/Image'
import type ImageSource from 'ol/source/Image'
import type { ServerType } from 'ol/source/wms'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  attributions?: string,
  crossOrigin?: string,
  imageExtent?: Extent
  projection?: string | ProjectionOptions,
  reprojectionErrorThreshold?: number,
  format?: string,
  version?: string,
  matrixSet?: string,
  serverType?: ServerType,
  imageSmoothing?: boolean,
  layers: string | unknown[],
  styles?: string | unknown[],
  time?: string,
  ratio?: number,
  imageSize?: number[],
  url?: string,
  params?: Record<string, unknown>
  imageLoadFunction?: (...args: unknown[]) => unknown,
}>(), {
  projection: 'EPSG:3857',
  reprojectionErrorThreshold: 0.5,
  format: 'image/png',
  version: '1.3.0',
  serverType: 'mapserver',
  imageSmoothing: true,
  styles: '',
  ratio: 1,
})

const layer = inject<ImageLayer<ImageSource>>('imageLayer')
const { properties } = usePropsAsObjectProperties(props)

const createSource = () => {
  return new ImageWMS({
    ...properties,
    params: {
      LAYERS: props.layers,
      STYLES: props.styles,
      TIME: props.time,
    },
    projection: typeof properties.projection === 'string'
      ? properties.projection
      : new Projection({
        ...properties.projection as ProjectionOptions,
      }),
  })
}

let source = createSource()

watch(properties, () => {
  layer?.setSource(null)
  source = createSource()
  layer?.setSource(source)
})
onMounted(() => {
  layer?.setSource(source)
})

onUnmounted(() => {
  layer?.setSource(null)
})

defineExpose({
  layer,
  source,
})
</script>
