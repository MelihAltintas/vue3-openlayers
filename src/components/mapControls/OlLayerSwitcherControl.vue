<script setup lang="ts">
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import { useAttrs } from 'vue'
import useControl from '@/composables/useControl'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  selection?: boolean,
  displayInLayerSwitcher?: (...ars: unknown[]) => unknown,
  show_progress?: boolean,
  mouseover?: boolean,
  reordering?: boolean,
  trash?: boolean,
  oninfo?: (...ars: unknown[]) => unknown,
  extent?: boolean,
  onextent?: (...ars: unknown[]) => unknown,
  drawDelay?: number,
  collapsed?: boolean,
  layerGroup?: Record<string, any>,
  noScroll?: boolean,
}>(), {
  show_progress: false,
  mouseover: false,
  reordering: true,
  trash: false,
  collapsed: true,
  noScroll: false,
})

const attrs = useAttrs()
const { properties } = usePropsAsObjectProperties(props)

const { control } = useControl(LayerSwitcher, properties, attrs)

defineExpose({
  control,
})

</script>
