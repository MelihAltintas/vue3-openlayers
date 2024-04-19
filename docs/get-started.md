# Get Started

vue3-openlayers works with the following versions which must be installed as peer dependencies:

<!-- auto-generated-peer-dependency-requirements START -->

- **[ol](https://openlayers.org/)**: `^9.1.0`
- **[ol-contextmenu](https://github.com/jonataswalker/ol-contextmenu)**: `^5.4.0`
- **[ol-ext](https://github.com/Viglino/ol-ext#,)**: `^4.0.15`
- **[vue](https://github.com/vuejs/core/tree/main/packages/vue#readme)**: `^3.4.0`

<!-- auto-generated-peer-dependency-requirements END -->

## Installation

::: code-group

```bash [npm]
npm i ol ol-ext ol-contextmenu    # install the peerDependencies
npm i vue3-openlayers             # install this library
```

```bash [yarn]
yarn add ol ol-ext ol-contextmenu # install the peerDependencies
yarn add vue3-openlayers          # install this library
```

```bash [pnpm]
pnpm add ol ol-ext ol-contextmenu # install the peerDependencies
pnpm add vue3-openlayers          # install this library
```

```bash [bun]
bun add ol ol-ext ol-contextmenu  # install the peerDependencies
bun add vue3-openlayers           # install this library
```

:::

## Usage: As Plugin

To use `vue3-openlayers` in your application as a Plugin for global component availability,
you can import all components (default export) or only parts of `vue3-openlayers` in your application (named exports).

::: code-group

```ts {8,12} [main.ts (Global Plugin)]
import { createApp } from "vue";
import App from "./App.vue";

// The style are only needed for some map controls.
// However, you can also style them by your own
import "vue3-openlayers/styles.css";

import OpenLayersMap from "vue3-openlayers";

const app = createApp(App);

app.use(OpenLayersMap /*, options */);

app.mount("#app");
```

```ts {8,12-14} [main.ts (Selective Plugins)]
import { createApp } from "vue";
import App from "./App.vue";

// The style are only needed for some map controls.
// However, you can also style them by your own
import "vue3-openlayers/styles.css";

import { Map, Layers, Sources } from "vue3-openlayers";

const app = createApp(App);

app.use(Map /*, options */);
app.use(Layers /*, options */);
app.use(Sources /*, options */);

app.mount("#app");
```

```vue [AppComponent.vue]
<script setup lang="ts"></script>

<template>
  <ol-map style="min-width: 400px; min-height: 400px;">// [!code focus:6]
    <ol-view :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
```

:::

## Usage: Explicit import

You can also import and use components individually by importing them directly in your components.

::: code-group

```vue [AppComponent.vue]
<script setup lang="ts">
import { Map, Layers, Sources } from "vue3-openlayers";
</script>

<template>
  <Map.OlMap style="min-width: 400px; min-height: 400px;">
    <Map.OlView :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <Layers.OlTileLayer>
      <Sources.OlSourceOsm />
    </Layers.OlTileLayer>
  </Map.OlMap>
</template>
```

:::

## Debug Mode

You can activate the `debug` mode, to log events receiving from OpenLayers and props passed to OpenLayers on the console.

### Plugin Usage

::: code-group

```ts {5,10-13} [main.ts (Global Plugin)]
import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap, {
  type Vue3OpenlayersGlobalOptions,
} from "vue3-openlayers";

const app = createApp(App);

const options: Vue3OpenlayersGlobalOptions = {
  debug: true,
};
app.use(OpenLayersMap, options);

app.mount("#app");
```

```ts {8,13-18} [main.ts (Selective Plugins)]
import { createApp } from "vue";
import App from "./App.vue";

import {
  Map,
  Layers,
  Sources
  type Vue3OpenlayersGlobalOptions
} from 'vue3-openlayers';

const app = createApp(App);

const options: Vue3OpenlayersGlobalOptions = {
  debug: true,
};
app.use(Map, options);
app.use(Layers, options);
app.use(Sources, options);

app.mount("#app");
```

:::

### Provide for components

::: code-group

```vue {2,10-14} [AppComponent.ts]
<script setup lang="ts">
import { provide } from "vue";
import {
  Map,
  Layers,
  Sources,
  type Vue3OpenlayersGlobalOptions,
} from "vue3-openlayers";

const options: Vue3OpenlayersGlobalOptions = {
  debug: true,
};

provide("ol-options", options);
</script>

<template>
  <Map.OlMap style="min-width: 400px; min-height: 400px">
    <Map.OlView :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <Layers.OlTileLayer>
      <Sources.OlSourceOsm />
    </Layers.OlTileLayer>
  </Map.OlMap>
</template>
```

:::
