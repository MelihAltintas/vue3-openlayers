import type { Ref } from 'vue'
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
  const feature = inject<Ref<featureType>>('feature')

  const {
    properties,
  } = usePropsAsObjectProperties(props)

  const geometry = computed(() => new GeometryType(...Object.values(properties)))

  watch(properties, () => {
    feature?.value?.setGeometry(geometry.value)
    feature?.value?.changed()
  })

  watch(() => feature, () => {
    feature?.value?.setGeometry(geometry.value)
  })

  onMounted(() => {
    feature?.value?.setGeometry(geometry.value)
  })

  onUnmounted(() => {
    feature?.value?.setGeometry(undefined)
  })

  return {
    geometry,
  }
}
