# ol-interaction-select

> Interaction for selecting vector features

[[toc]]

## Demo

<script setup>
import SelectDemo from "@demos/SelectDemo.vue"
</script>

<ClientOnly>
<SelectDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage              |           Explicit Import            |
| ------------------------- | :----------------------------------: |
| `<ol-interaction-select>` | `<Interactions.OlInteractionSelect>` |

::: code-group

<<< ../../../../src/demos/SelectDemo.vue

:::

## Properties

### multi

- **Type**: `String`

### features

- **Type**: `Collection`

### filter

- **Type**: `Function`

### condition

- **Type**: `Function`
