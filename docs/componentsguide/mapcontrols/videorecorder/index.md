# ol-videorecorder-control

> A simple toggle control The control can be created with an interaction to control its activation.

[[toc]]

## Demo

<script setup>
import VideorecorderControlDemo from "@demos/VideorecorderControlDemo.vue"
</script>
<ClientOnly>
<VideorecorderControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage                 |            Explicit Import             |
|------------------------------|:--------------------------------------:|
| `<ol-videorecorder-control>` | `<MapControls.OlVideorecorderControl>` |

::: code-group

<<< ../../../../src/demos/VideorecorderControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from `ol-ext` directly.
Their types and default values can be checked-out [in the official docs](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.VideoRecorder.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `downloadName`

If this property is set, the file will be downloaded immediately after stopping the recording and saved as the given `downloadName`.
If not defined, you need to handle the `stop` event fired on component level.
By default this property is set to `mapVideo.mp4`.

## Events

You have access to all Events from the underlying control.
Check out [the official docs](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.VideoRecorder.html) to see the available events tht will be fired.

```html
<ol-videorecorder-control @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying control.
Check out [the official docs](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.VideoRecorder.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-videorecorder-control ref="vRef" @error="handleEvent" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type VideoRecorder from "ol-ext/control/VideoRecorder";

const vRef = ref<{ control: VideoRecorder }>(null);

onMounted(() => {
  const recorder: VideoRecorder = vRef.value?.control;
  // call your method on `recorder`
});
</script>
```
