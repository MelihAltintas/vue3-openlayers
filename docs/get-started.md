# Get Started

vue3-openlayers works with the following versions which must be installed as peer dependencies:

<!-- auto-generated-peer-dependency-requirements START -->

- **[ol](https://github.com/openlayers/openlayers)**: `^8.0.0`
- **[ol-contextmenu](https://github.com/jonataswalker/ol-contextmenu)**: `^5.2.1`
- **[ol-ext](https://github.com/Viglino/ol-ext)**: `^4.0.11`
- **[vue](https://github.com/vuejs/core)**: `^3.0.0`

<!-- auto-generated-peer-dependency-requirements END -->

## Installation

```bash
npm install ol ol-ext ol-contextmenu  # install the peerDependencies
npm install vue3-openlayers           # install this library
```

## Usage

To use `vue3-openlayers` in your application, you can import all components or just what you really need.

```ts
import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // vue3-openlayers version < 1.0.0-*

const app = createApp(App);
app.use(OpenLayersMap /* options */);

app.mount("#app");
```

## Debug Mode

You can activate the `debug` mode, to log events receiving from OpenLayers and props passed to OpenLayers on the console.

```ts
import OpenLayersMap, {
  type Vue3OpenlayersGlobalOptions,
} from "vue3-openlayers";
// ...

const options: Vue3OpenlayersGlobalOptions = {
  debug: true,
};
app.use(OpenLayersMap, options);
```
