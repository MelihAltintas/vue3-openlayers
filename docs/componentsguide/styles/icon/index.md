# ol-style-icon

> Style the icon of a points

Use it inside ol-style to style points

<script setup>
import IconDemo from "@demos/IconDemo.vue"
import IconDemo2 from "@demos/IconDemo2.vue"
</script>

## Using a passed icon url

<ClientOnly>
  <IconDemo />
</ClientOnly>

## Using an icon component

<ClientOnly>
  <IconDemo2 />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/IconDemo.vue

:::

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_style_Icon-Icon.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.
