# Plugins Guide

If you like to add a specific component wrapper based on an external
library deviating from `ol` or `ol-ext`, please follow this guide.

## Source Plugins

If you like to add a specific map source (e. g. for vector or tile data),
you can create your own component and integrate it with vue3-openlayers.
Therefore the source component should be placed within a layer component.
This allows you to inject either `tileLayer`, `imageLayer`,
`vectorLayer` or `heatmapLayer` from the parent component.
It gives you the ability to apply your source on this layer.

The example below demonstrates how a source called `FooSource` could be implemented:

```vue [FooSource.vue]
<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onMounted, onUnmounted, shallowRef } from "vue";

// import the source to be wrapped in a component.
import FooSource, { type Options } from "foo-source";

// import the layer type, the source is applied to.
// It is defined by the parent component and injected below.
import type TileLayer from "ol/layer/Tile";
// import type ImageLayer from "ol/layer/Image";
// import type VectorLayer from "ol/layer/Vector";

// Define the options, the wrapper component can receive.
// In best case, they will be passed 1:1 from the original source.
const props = withDefaults(defineProps<Options>(), {
  // you can define some default values here
});

// Inject the reference to the layer, the source will be applied to.
// The provide comes from a parent component
const layer = inject<Ref<TileLayer<FooSource>> | null>("tileLayer");
// const layer = inject<ImageLayer<FooSource> | null>("imageLayer");
// const layer = inject<Ref<VectorLayer<FooSource>> | null>("vectorLayer");
// const layer = inject<Ref<HeatmapLayer> | null>("heatmapLayer");

// Store a shallowRef of the Source, so it can be watched for changes.
const source = shallowRef(new FooSource(props));

// Watch for source changes and re-apply the source to the layer.
watch(source, () => {
  layer?.value?.setSource(source.value);
});

// Watch for layer changes and re-apply the source to the layer.
watch(layer, () => {
  layer?.value?.setSource(source.value);
});

// Apply the source once the component is mounted.
onMounted(() => {
  layer?.value?.setSource(source.value);
});

// Cleanup when component is destroyed.
onUnmounted(() => {
  layer?.value?.setSource(null);
});

// Expose the layer and source, so it can be used as a `ref=""` on the element
defineExpose({
  layer,
  source,
});
</script>
```

For a live example, please checkout this [demo](https://stackblitz.com/edit/vue3-openlayers-source-xyz-natural-earth-demo).

## Publish extension as NPM package

When creating and publishing an extension for vue3-openlayers, you should follow this instruction.
This assures, the lib can be found easily and that it follows a common plugin naming pattern.

- The package name should be `vue3-openlayers-<plugin>-<feature>`, e. g. `vue3-openlayers-source-foo`
- Please add the keywords `vue3-openlayers` and `openlayers` to your published package

```jsonc [package.json]
{
  "name": "vue3-openlayers-source-foo",
  "keywords": [
    "openlayers",
    "vue3-openlayers",
  ],
  //...
}
```
