# Get Started

## Installation

vue3-openlayers works with Vue.js **^3.0** and OpenLayers **^7.3.0**

Install current **stable version**

```bash
npm install vue3-openlayers

# OR:

npm install vue3-openlayers@next # try out the latest version (next channel)
```

## Usage

To use `vue3-openlayers` in your application, you can import all components or just what you really need.

```js
import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";

const app = createApp(App);
app.use(OpenLayersMap);

app.mount("#app");
```
