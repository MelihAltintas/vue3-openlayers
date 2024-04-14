# ol-animation-path

> Animate along a path

[[toc]]

## Demo

<script setup>
import FlowLineDemo from "@demos/FlowLineDemo.vue"
</script>
<ClientOnly>
<FlowLineDemo />
</ClientOnly>

## Setup

<!--@include: ../../animations.plugin.md-->

## Usage

| Plugin Usage          |        Explicit Import         |
|-----------------------|:------------------------------:|
| `<ol-animation-path>` | `<Animations.OlAnimationPath>` |

::: code-group

<<< ../../../../src/demos/FlowLineDemo.vue

:::

## Properties

### duration

- **Type**: `Number`
- **Default**: `1000`

duration of the animation in ms, default 1000

### revers

- **Type**: `Boolean`
- **Default**: `false`

revers the animation direction

### repeat

- **Type**: `Number`
- **Default**: `0`

number of time to repeat the animation, default 0

### easing

- **Type**: `function`
- **Default**: `0`

an easing function for the animation, default ol.easing.linear

### hiddenStyle

- **Type**: `ol.style.Style`

a style to display the feature when playing the animation to be used to make the feature selectable when playing animation , default the feature will be hidden when playing (and not selectable)

### fade

- **Type**: `function`
- **Default**: `none`

an easing function used to fade in the feature, default none

### rotate

- **Type**: `Boolean`
- **Default**: `true`

### speed

- **Type**: `Number`

speed of the feature if 0 the duration parameter will be used instead, default 0

### path

- **Type**: `Number[]`

The path the animation applies to.
