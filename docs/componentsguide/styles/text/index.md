# ol-style-text

> Style the text of a shape

[[toc]]

## Demo

<script setup>
import TextDemo from "@demos/TextDemo.vue"
</script>

<ClientOnly>
<TextDemo/>
</ClientOnly>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage      |    Explicit Import     |
| ----------------- | :--------------------: |
| `<ol-style-text>` | `<Styles.OlStyleText>` |

Add text to shapes

::: code-group

<<< ../../../../src/demos/TextDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_style_Text-Text.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.
