# ol-style-icon

> Style the icon of a points

Use it inside ol-style to style points

[[toc]]

<script setup>
import IconDemo from "@demos/IconDemo.vue"
import IconDemoHtmlContent from "@demos/IconDemoHtmlContent.vue"
</script>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage      |    Explicit Import     |
|-------------------|:----------------------:|
| `<ol-style-icon>` | `<Styles.OlStyleIcon>` |

### `src` URL

You can pass an icon image by setting the `src` attribute as shown below.

<ClientOnly>
<IconDemo />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/IconDemo.vue

:::

### Slot

If no `src` Attribute is set, the component will render the HTML content within the slot into an image data URL and use the generated image as icon.

<ClientOnly>
<IconDemoHtmlContent />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/IconDemoHtmlContent.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_style_Icon-Icon.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.
