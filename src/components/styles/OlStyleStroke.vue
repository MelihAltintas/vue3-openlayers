<script setup lang="ts">
import type { Options } from 'ol/style/Stroke'
import Stroke from 'ol/style/Stroke'
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
} from 'vue'
import type Style from 'ol/style/Style'
import type CircleStyle from 'ol/style/Circle'
import type Draw from 'ol/interaction/Draw'
import type Modify from 'ol/interaction/Modify'
import type { ColorLike } from 'ol/colorlike'
import type { Color } from 'ol/color'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  color?: Color | ColorLike,
  lineCap?: CanvasLineCap,
  lineJoin?: CanvasLineJoin,
  lineDash?: number[],
  lineDashOffset?: number,
  miterLimit?: number,
  width?: number,
}>(), {
  lineCap: 'round',
  lineJoin: 'round',
  lineDashOffset: 0,
  miterLimit: 10,
  width: 1,
})

const style = inject<Style|null>('style', null)
const styledObj = inject<Draw|Modify|Style|null>('styledObj', null)
const circle = inject<CircleStyle|null>('circle', null)

const { properties } = usePropsAsObjectProperties(props)

if (style != null && circle == null) { // in style object
  let stroke = new Stroke(properties)
  style?.setStroke(stroke)
  const applyStroke = () => {
    // @ts-ignore
    style?.setStroke(null)
    stroke = new Stroke(properties)
    style?.setStroke(stroke)
  }
  watch(properties, () => {
    applyStroke()
  })
  watch(style, () => {
    applyStroke()
  })

  onMounted(() => {
    // @ts-ignore
    style?.setStroke(stroke)
  })

  onUnmounted(() => {
    // @ts-ignore
    style?.setStroke(null)
  })
} else if (circle != null) { // in circle
  const applyStroketoCircle = (innerProperties: Options) => {
    // @ts-ignore
    circle?.getStroke()?.setColor(innerProperties.color)
    circle?.getStroke()?.setLineCap(innerProperties.lineCap)
    // @ts-ignore
    circle?.getStroke()?.setLineDash(innerProperties.lineDash)
    circle?.getStroke()?.setLineDashOffset(innerProperties.lineDashOffset)
    circle?.getStroke()?.setLineJoin(innerProperties.lineJoin)
    circle?.getStroke()?.setMiterLimit(innerProperties.miterLimit)
    circle?.getStroke()?.setWidth(innerProperties.width)

    circle?.setRadius(circle?.getRadius())
    try {
      // @ts-ignore
      styledObj?.changed()
    } catch (error) {
      // @ts-ignore
      styledObj?.changed()
    }
  }

  applyStroketoCircle(properties)

  watch(properties, (newVal: Options) => {
    applyStroketoCircle(newVal)
  })

  watch(circle, () => {
    applyStroketoCircle(properties)
  })
}
</script>
