import { createApp } from 'vue'

import OpenLayersMap from '.'
import App from './App.vue'

const app = createApp(App)

app.use(OpenLayersMap)

app.mount('#app')
