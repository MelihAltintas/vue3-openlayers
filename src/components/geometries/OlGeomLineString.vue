<script setup lang="ts">
import LineString from 'ol/geom/LineString'
import useGeometry from '@/composables/useGeometry'

const props = withDefaults(defineProps<{
  coordinates: number[],
  opt_layout?: string,
}>(), {
  opt_layout: 'XY',
})

const {
  geometry,
} = useGeometry(LineString, props)

defineExpose({
  geometry,
})
</script>
