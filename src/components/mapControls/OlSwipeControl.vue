<script setup lang="ts">
import Swipe from 'ol-ext/control/Swipe'
import { useAttrs } from 'vue'
import type { Layer } from 'ol/layer'
import useControl from '@/composables/useControl'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  layerList?: Layer[],
  className?: string,
  position?: number,
  orientation?: string,
}>(), {
  className: 'ol-swipe',
  position: 0.5,
  orientation: 'vertical',
})

const attrs = useAttrs()
const { properties } = usePropsAsObjectProperties(props)

const { control } = useControl(Swipe, properties, attrs)

// @ts-ignore
props.layerList.forEach((layer, index) => {
  control.value.addLayer(layer, index === 1)
})
defineExpose({
  control,
})

</script>
