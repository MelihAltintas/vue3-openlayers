### Plugin usage

This component is part of the `MapControls` plugin.
**If not installed [globally](/get-started#usage-as-plugin)**, you need to import and `use` the plugin in your `main.ts` or use the explicit component import (see section below).

::: details Import and use the `MapControls` plugin

```ts {8,13} [main.ts]
import { createApp } from "vue";
import App from "./App.vue";

import {
  // [!code focus:6]
  Map,
  Layers,
  Sources,
  MapControls,
} from "vue3-openlayers";

const app = createApp(App);
// ...
app.use(MapControls); // [!code focus]
// ...
```

:::

### Explicit import

If you don't want to install a plugin, you can [import the component explicitly](/get-started#usage-explicit-import).
It's available as a child of the named export `MapControls`.

> [!NOTE]
> The following documentation refers to the plugin usage.
> Please make sure to adopt the component names, when you decided to use explicit component imports (e. g. `<ol-map>` becomes `<Map.OlMap>` etc.).
