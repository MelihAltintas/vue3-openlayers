
## Installation

Vue3 OpenLayers works with Vue.js **^3.0** and OpenLayers **^6.5.0**

# NPM

Install current **stable version**

```bash
npm install vue3-openlayers
``` 

## Usage

To use Vue3 OpenLayers  in your application, you can import all components or just what you really need.

```js
import { createApp } from 'vue'
import App from './App.vue'

import OpenLayersMap from 'vue3-openlayers'


const app = createApp(App);
app.use(OpenLayersMap)

app.mount('#app')
``` 
