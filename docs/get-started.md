# Get Started

vue3-openlayers works with the following versions which must be installed as peer dependencies:

<!-- auto-generated-peer-dependency-requirements START -->

- **[ol](https://openlayers.org/)**: `^9.1.0`
- **[ol-contextmenu](https://github.com/jonataswalker/ol-contextmenu)**: `^5.4.0`
- **[ol-ext](https://github.com/Viglino/ol-ext#,)**: `^4.0.15`
- **[vue](https://github.com/vuejs/core/tree/main/packages/vue#readme)**: `^3.4.0`

<!-- auto-generated-peer-dependency-requirements END -->

## Installation

```bash
npm install ol ol-ext ol-contextmenu  # install the peerDependencies
npm install vue3-openlayers           # install this library
```

## Usage: As Plugin

To use `vue3-openlayers` in your application as a Plugin for global component availability,
you can import all components (default export) or only parts of `vue3-openlayers` in your application (named exports).

```ts
import { createApp } from "vue";
import App from "./App.vue";

// The style are only needed for some map controls.
// However, you can also style them by your own
import "vue3-openlayers/styles.css";

// provide all components
import OpenLayersMap from 'vue3-openlayers'
// OR: just use the parts you need
import { Map, Layers, Sources } from 'vue3-openlayers'

const app = createApp(App);

// provide all components
app.use(OpenLayersMap /*, options */);

// OR: just use the parts you need
app.use(Map)
app.use(Layers)
app.use(Sources)

app.mount("#app");
```

Now you can use the globally provided components like this:

```vue
<script setup lang="ts"></script>

<template>
  <ol-map style="min-width: 400px; min-height: 400px">
    <ol-view :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
```

## Usage: Import where needed

You can also import and use components individually by importing them directly in your components.

```vue
<script setup lang="ts">
import { Map, Layers, Sources } from 'vue3-openlayers'
</script>

<template>
  <Map.OlMap style="min-width: 400px; min-height: 400px">
    <Map.OlView :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <Layers.OlTileLayer>
      <Sources.OlSourceOSM />
    </Layers.OlTileLayer>
  </Map.OlMap>
</template>
```

## Debug Mode

You can activate the `debug` mode, to log events receiving from OpenLayers and props passed to OpenLayers on the console.

> Note: This is currently only possible when setting up vue3-openlayers globally.

```ts
import OpenLayersMap, { type Vue3OpenlayersGlobalOptions } from "vue3-openlayers";
// ...

const options: Vue3OpenlayersGlobalOptions = {
  debug: true,
};
app.use(OpenLayersMap, options);
```
