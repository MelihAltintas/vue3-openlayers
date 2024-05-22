# Extend vue3-openlayers

If you like to add a specific component wrapper based on an external
library deviating from `ol` or `ol-ext`, please follow this guide.

## Layer Plugins

If you like to add a specific map layer, you can create your own component and integrate it.
Therefore the source component should be placed within a layer component.
The composable `useLayer` will help you implementing it.
It will add the layer to the parent layer group, to a parent overview-map component or to the map itself based on usage and your component tree.

The example below demonstrates how a source called `FooLayer` could be implemented:

```vue [FooLayer.vue]
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, shallowRef } from "vue";
import FooLayer from "ol/layer/FooLayer";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import useLayer from "@/composables/useLayer";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";

const props = withDefaults(
  defineProps<script
    LayersCommonProps & {
      myProp?: string;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    myProp: "myProp",
  },
);

const properties = usePropsAsObjectProperties(props);

const layer = shallowRef(new FooLayer(properties));
useLayer(layer, props);

provide("layer", layer);

defineExpose({
  layer,
});
</script>
```

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
import { inject } from "vue";
import { useSource } from "vue3-openlayers";

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

// Create the source and watch for changes of the source, the props or the parent layer.
// Changes will be applied and the source will be removed on unmount.
// The last parameter will receive the event names which should be handled by the target component.
// Check out the sources of the composable for more details.
const { source } = useSource(FooSource, layer, props, ["removefeature"]);

// Expose the layer and source, so it can be used as a `ref=""` on the element
defineExpose({
  layer,
  source,
});
</script>
```

For a live example, please checkout this [demo](https://stackblitz.com/edit/vue3-openlayers-source-xyz-natural-earth-demo).

## Animation Plugins

The composable `useAnimation` can and should be used to wrap features animations in a vue component.
It will inject needed layers and connect the animation with it.

```vue
<template>
  <slot></slot>
</template>

<script setup lang="ts">
import MyAnimation from "./my-animation";
import useAnimation from "@/composables/useAnimation";

const props = withDefaults(
  defineProps<{
    speed?: number;
    // ...
   }>(),
  {
    speed: 0,
  },
);

const exposed = useAnimation(MyAnimation, props);

defineExpose(exposed);
</script>
```

## MapControl Plugins

The composable `useControl` can and should be used to wrap features map controls in a vue component.
It handles adding / removing a control to the map or a control bar.

```vue
<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import MyControl from "./my-control";

const props = withDefaults(
  defineProps<{
    className?: string;
    // ...
  }>(),
  {
    className: "ol-my-control",
  },
);

const attrs = useAttrs();
const { control } = useControl(MyControl, props, attrs);

defineExpose({
  control,
});
</script>
```

## Geometry Plugins

The composable `useGeometry` can and should be used to wrap geometries in a vue component.
It injects the parent feature component and applies a geometry.
It also watches for geometry changes and updates the features.

```vue
<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import MyGeometry from "./my-geometry";
import useGeometry from "@/composables/useGeometry";

const props = withDefaults(
  defineProps<{
    someProperty: number[];
  }>(),
  {},
);

const geometry = useGeometry(MyGeometry, props);

defineExpose({
  geometry,
});
</script>
```

## Other Composables

The following composables are exposed to support 3rd-party libs.

### usePropsAsObjectProperties

This composable is used to proxy vue component props and:
- log them in debug mode
- make them reactive
- convert prop `styles` int `style` since `style` cannot be used as HTML attribute since it conflicts wit native `style` attribute.

```ts
const props = withDefaults(defineProps<{
  title: string;
  styles: string[]
}>(), {
  styles: []
});

const properties = usePropsAsObjectProperties(props);
// properties.styles is undefined
// properties.style is of type string[]
```

### useOpenLayersEvents

This composable is used to be able to pass-through all original events to the current component.

```ts
// ...
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

useOpenLayersEvents(draw, ["drawstart", "drawend"]);
```
