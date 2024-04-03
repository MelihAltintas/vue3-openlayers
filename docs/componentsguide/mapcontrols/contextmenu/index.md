# ol-context-menu-control

> A contextmenu extension for OpenLayers.

Right click on the map to open the contextmenu.

<script setup>
import ContextMenuDemo from "@demos/ContextMenuDemo.vue"
</script>
<ClientOnly>
<ContextMenuDemo />
</ClientOnly>

## Usage

Add context menu to map

::: code-group

<<< ../../../../src/demos/ContextMenuDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from `ol-contextmenu` directly.
Their types and default values can be checked-out [in the official docs](https://github.com/jonataswalker/ol-contextmenu).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying control.
Check out [the official docs](https://github.com/jonataswalker/ol-contextmenu) to see the available events tht will be fired.

```html
<ol-videorecorder-control @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying control.
Check out [the official docs](https://github.com/jonataswalker/ol-contextmenu) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-videorecorder-control ref="controlRef" @error="handleEvent" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type ContextMenu from "ol-contextmenu";

const controlRef = ref<{ control: ContextMenu }>(null);

onMounted(() => {
  const contextmenu: ContextMenu = controlRef.value?.control;
  // call your method on `contextmenu`
});
</script>
```
