<template><div v-if="false"></div></template>
<script setup lang="ts">
import Button from 'ol-ext/control/Button'

import { useAttrs } from 'vue'
import useControl from '@/composables/useControl'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

const props = withDefaults(defineProps<{
  html?: string,
  name?: string
  className?: string
  title?: string
  handleClick?: () => unknown
}>(), {})

const attrs = useAttrs()
const { properties } = usePropsAsObjectProperties(props)

const { control } = useControl(Button, properties, attrs)

defineExpose({
  control,
})

</script>
