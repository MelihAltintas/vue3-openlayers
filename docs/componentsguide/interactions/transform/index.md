# ol-interaction-transform

> Interaction for transform feature geometries.

[[toc]]

## Demo

<script setup>
import TransformDemo from "@demos/TransformDemo.vue"
</script>

<ClientOnly>
<TransformDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage                 |             Explicit Import             |
|------------------------------|:---------------------------------------:|
| `<ol-interaction-transform>` | `<Interactions.OlInteractionTransform>` |

::: code-group

<<< ../../../../src/demos/TransformDemo.vue

:::

## Properties

### enableRotatedTransform

- **Type**: `Function`

### condition

- **Type**: `Function`

### addCondition

- **Type**: `Function`

### filter

- **Type**: `Function`

### layers

- **Type**: `Array`

### hitTolerance

- **Type**: `Number`
- **Default**: `2`

### translateFeature

- **Type**: `Boolean`
- **Default**: `true`

### scale

- **Type**: `Boolean`
- **Default**: `true`

### rotate

- **Type**: `Boolean`
- **Default**: `true`

### keepAspectRatio

- **Type**: `Boolean`
- **Default**: `false`

### translate

- **Type**: `Boolean`
- **Default**: `true`

### stretch

- **Type**: `Boolean`
- **Default**: `true`

## Events

- `select`
- `rotatestart`
- `rotating`
- `rotateend`
- `translatestart`
- `translating`
- `translateend`
- `scalestart`
- `scaling`
- `scaleend`
