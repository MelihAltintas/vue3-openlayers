import DefaultTheme from "vitepress/theme";

import "@/assets/style.css";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const plugin = await import("../../../src");
      app.use(plugin, { debug: true });
    }
  },
};
