import { createApp } from "vue";
import AppDemo from "./demos/AppDemo.vue";

import OpenLayersMap from ".";

const app = createApp(AppDemo);
app.use(OpenLayersMap);

app.mount("#app");
