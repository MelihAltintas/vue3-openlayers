<script setup lang="ts">
import MultiLineString from 'ol/geom/MultiLineString'
import useGeometry from '@/composables/useGeometry'

const props = withDefaults(defineProps<{
  coordinates: number[],
  opt_layout?: string,
}>(), {
  opt_layout: 'XY',
})

const {
  geometry,
} = useGeometry(MultiLineString, props)

defineExpose({
  geometry,
})
</script>
