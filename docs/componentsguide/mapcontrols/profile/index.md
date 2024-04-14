# ol-profile-control

> A profile control.

[[toc]]

## Demo

<script setup>
import ProfileControlDemo from "@demos/ProfileControlDemo.vue"
</script>
<ClientOnly>
<ProfileControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage           |         Explicit Import          |
|------------------------|:--------------------------------:|
| `<ol-profile-control>` | `<MapControls.OlProfileControl>` |

::: code-group

<<< ../../../../src/demos/ProfileControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from `ol-ext` directly.
Their types and default values can be checked-out [in the official OpenLayers docs: `ol-ext/control/Profile`](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.Profile.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying `ol-ext` Profile Control API (without the `event:` prefix).
Check out [the official OpenLayers docs](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.Profile.html) to see the available events tht will be fired.

For example:

```html
<ol-profile-control @over="handleOver" @out="handleOut" />
```

## Methods

You have access to all Methods from the underlying `ol-ext` Profile Control API.
Check out [the official OpenLayers docs](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.Profile.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-profile-control ref="profileControlRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Profile from "ol-ext/controls/Profile";

const profileControlRef = ref<{ control: Profile }>(null);

onMounted(() => {
  const profile: Profile = profileControlRef.value?.control;
  // call your method on `profile`
});
</script>
```
