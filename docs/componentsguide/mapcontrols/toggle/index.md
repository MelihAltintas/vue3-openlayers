# ol-toggle-control

> A simple toggle control The control can be created with an interaction to control its activation.

[[toc]]

## Demo

<script setup>
import ToggleControlDemo from "@demos/ToggleControlDemo.vue"
</script>
<ClientOnly>
<ToggleControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage          |         Explicit Import         |
|-----------------------|:-------------------------------:|
| `<ol-toggle-control>` | `<MapControls.OlToggleControl>` |

::: code-group

<<< ../../../../src/demos/ToggleControlDemo.vue

:::

## Properties

### className

class of the control

- **Type**: `String`

### title

title of the control

- **Type**: `String`

### html

html to insert in the control

- **Type**: `String`

### interaction

`ol.interaction` associated with the control

- **Type**: `Object`

### active

the control is created active

- **Type**: `Boolean`
- **Default**: `false`

### disable

the control is created disabled

- **Type**: `Boolean`
- **Default**: `false`

### bar

a subbar (`ol.control.Bar`) associated with the control (drawn when active if control is nested in a ol.control.Bar)

- **Type**: `Object`

### autoActive

the control will activate when shown in an `ol.control.Bar`

- **Type**: `Boolean`
- **Default**: `false`

### onToggle

callback when control is clicked (or use change:active event)

- **Type**: `Function`
