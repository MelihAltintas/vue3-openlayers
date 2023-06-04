import { createApp } from "vue";

import OpenLayersMap from ".";
import AppDemo from "./demos/AppDemo.vue";

const app = createApp(AppDemo);

app.use(OpenLayersMap);

app.mount("#app");
