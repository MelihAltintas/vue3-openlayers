import DefaultTheme from "vitepress/theme";

import "@/assets/style.css";
import "./demo.css";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const plugin = await import("../../../src");
      app.use(plugin, { debug: !!import.meta.env.VITE_DEBUG });
    }
  },
};
