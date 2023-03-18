import {
  inject,
  onMounted,
  onUnmounted,
  watch,
  computed,
} from 'vue'
import type featureType from 'ol/Feature'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
import type { Class } from '@/composables/AnimationTypes'

export default function useGeometry(
  GeometryType: Class,
  props: Record<string, unknown>,
) {
  const feature = inject<featureType>('feature')

  const {
    properties,
  } = usePropsAsObjectProperties(props)

  const geometry = computed(() => new GeometryType(...Object.values(properties)))

  watch(properties, () => {
    feature?.setGeometry(geometry.value)
    feature?.changed()
  })

  watch(() => feature, () => {
    feature?.setGeometry(geometry.value)
  })

  onMounted(() => {
    feature?.setGeometry(geometry.value)
  })

  onUnmounted(() => {
    feature?.setGeometry(undefined)
  })

  return {
    geometry,
  }
}
