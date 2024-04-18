### Plugin usage

This component is part of the `Map` plugin.
**If not installed [globally](/get-started#usage-as-plugin)**, you need to import and `use` the plugin in your `main.ts` or use the explicit component import (see section below).

::: details Import and use the `Map` plugin

```ts {5,12} [main.ts]
import { createApp } from "vue";
import App from "./App.vue";

import {
  // [!code focus:5]
  Map,
  Layers,
  Sources,
} from "vue3-openlayers";

const app = createApp(App);
// ...
app.use(Map); // [!code focus]
// ...
```

:::

### Explicit import

If you don't want to install a plugin, you can [import the component explicitly](/get-started#usage-explicit-import).
It's available as a child of the named export `Map`.

> [!NOTE]
> The following documentation refers to the plugin usage.
> Please make sure to adopt the component names, when you decided to use explicit component imports (e. g. `<ol-map>` becomes `<Map.OlMap>` etc.).
