# ol-videorecorder-control

> A simple toggle control The control can be created with an interaction to control its activation.

<script setup>
import VideorecorderControlDemo from "@demos/VideorecorderControlDemo.vue"
</script>
<ClientOnly>
<VideorecorderControlDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/VideorecorderControlDemo.vue

:::

## Properties

### className

class of the control

- **Type**: `String`

### framerate

framerate for the video

- **Type**: `Number`
- **Default**: `30`

### videoBitsPerSecond

bitrate for the video

- **Type**: `Number`
- **Default**: `5000000`

### videoTarget

video element or the container to add the video when finished or `'DIALOG'` to show it in a dialog.

- **Type**: `String | DOMElement`

### downloadName

class of the control

- **Type**: `String`
- **Default**: `'mapVideo.mp4'`
