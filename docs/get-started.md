# Get Started

## Installation

vue3-openlayers works with Vue.js **^3.0** and OpenLayers **^6.6.1**

Install current **stable version**

```bash
npm install vue3-openlayers
```

## Usage

To use vue3-openlayers in your application, you can import all components or just what you really need.

```js
import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

const app = createApp(App);
app.use(OpenLayersMap);

app.mount("#app");
```
