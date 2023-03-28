import { createApp } from "vue";
import App from "./App.vue";

import OpenLayersMap from ".";

const app = createApp(App);
app.use(OpenLayersMap);

app.mount("#app");
