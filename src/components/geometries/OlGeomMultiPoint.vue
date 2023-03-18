<script setup lang="ts">
import MultiPoint from 'ol/geom/MultiPoint'
import useGeometry from '@/composables/useGeometry'

const props = withDefaults(defineProps<{
  coordinates: number[],
  opt_layout?: string,
}>(), {
  opt_layout: 'XY',
})

const {
  geometry,
} = useGeometry(MultiPoint, props)

defineExpose({
  geometry,
})
</script>
