---
aside: false
---

# Map Controls

A control is a visible widget with a DOM element in a fixed position on the screen.
They can involve user input (buttons), or be informational only;
the position is determined using CSS.
By default these are placed in the container with CSS class name ol-overlaycontainer-stopevent, but can use any outside DOM element.

<script setup>
import MapControlDemo from "@demos/MapControlDemo.vue"
</script>
<ClientOnly>
<MapControlDemo />
</ClientOnly>

## Control List

See menu items on the left.

## Usage

::: code-group

<<< ../../../src/demos/MapControlDemo.vue

:::
