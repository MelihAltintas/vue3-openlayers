<script setup lang="ts">
import Fill from 'ol/style/Fill'
import type CircleStyle from 'ol/style/Circle'

import {
  inject,
  watch,
  onMounted,
  onUnmounted,
} from 'vue'
import type Style from 'ol/style/Style'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  color?: string,
}>(), {})

const style = inject<Style|null>('style', null)
const circle = inject<CircleStyle|null>('circle', null)
const styledObj = inject<Style|null>('styledObj', null)

const { properties } = usePropsAsObjectProperties(props)

if (style != null && circle == null) { // in style object
  let fill = new Fill(properties)
  style?.setFill(fill)

  const applyFill = () => {
    // @ts-ignore
    style?.setFill(null)
    fill = new Fill(properties)
    style?.setFill(fill)
  }
  watch(properties, () => {
    applyFill()
  })

  watch(style, () => {
    applyFill()
  })

  onMounted(() => {
    style?.setFill(fill)
  })

  onUnmounted(() => {
    // @ts-ignore
    style?.setFill(null)
  })
} else if (circle != null) { // in circle
  const applyFilltoCircle = (color: any) => {
    circle?.getFill().setColor(color)

    circle?.setRadius(circle?.getRadius()) // force render
    try {
      // @ts-ignore
      styledObj?.changed()
    } catch (error) {
      // @ts-ignore
      styledObj?.changed()
    }
  }

  applyFilltoCircle(properties.color)

  watch(properties, () => {
    applyFilltoCircle(properties.color)
  })
  watch(circle, () => {
    applyFilltoCircle(properties.color)
  })
}
</script>
