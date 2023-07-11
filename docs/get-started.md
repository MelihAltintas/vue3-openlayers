# Get Started

## Installation

vue3-openlayers works with [Vue.js](https://vuejs.org/) **^3.0** and [OpenLayers](https://github.com/openlayers/openlayers) **^7.4.0**.
Also it uses the Openlayers extensions provided by the [`ol-ext` project](https://github.com/Viglino/ol-ext) which must be installed in version **^4.0.8**.

Install current **stable version**

```bash
npm install ol ol-ext            # install the peerDependencies
npm install vue3-openlayers@next # install this library with the latest features and fixes (recommended)

# OR: install this library (last stable before whole codebase-wide refactorings were made) - not recommended anymore
npm install vue3-openlayers
```

## Usage

To use `vue3-openlayers` in your application, you can import all components or just what you really need.

```ts
import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // vue3-openlayers version < 1.0.0-*
import "vue3-openlayers/dist/vue3-openlayers.css"; // vue3-openlayers version >= 1.0.0-*

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
