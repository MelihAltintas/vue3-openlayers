# ol-style-icon

> Style the icon of a points

Use it inside ol-style to style points

[[toc]]

## Demo

<script setup>
import IconDemo from "@demos/IconDemo.vue"
</script>

<ClientOnly>
<IconDemo />
</ClientOnly>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage      |    Explicit Import     |
|-------------------|:----------------------:|
| `<ol-style-icon>` | `<Styles.OlStyleIcon>` |

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
