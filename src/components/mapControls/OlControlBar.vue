<template>
  <slot></slot>
</template>

<script setup lang="ts">
import Bar from 'ol-ext/control/Bar'
import { provide, useAttrs } from 'vue'
import useControl from '@/composables/useControl'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  toggleOne: boolean,
  group: boolean,
}>(), {
  toggleOne: true,
  group: true,
})

const attrs = useAttrs()
const { properties } = usePropsAsObjectProperties(props)

const { control } = useControl(Bar, properties, attrs)

provide('controlBar', control)

defineExpose({
  control,
})

</script>
