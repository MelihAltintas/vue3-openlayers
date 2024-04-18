# ol-projection-register

> Register a custom projection

`ol-projection-register` component creates the given projection definition and makes it available to use with OpenLayers.

[[toc]]

## Demo

<script setup>
import ProjectionRegisterDemo from "@demos/ProjectionRegisterDemo.vue"
</script>

<ClientOnly>
<ProjectionRegisterDemo />
</ClientOnly>

## Setup

<!--@include: ../map.plugin.md-->

## Usage

| Plugin Usage               |       Explicit Import        |
| -------------------------- | :--------------------------: |
| `<ol-projection-register>` | `<Map.OlProjectionRegister>` |

Example below shows how to register and use a custom projection on to the map.

::: code-group

<<< ../../../src/demos/ProjectionRegisterDemo.vue

:::

## Properties

### projectionName

The name of the projection (e. g. `"EPSG:32640"`)

- **Type**: `string`
- **Required**

### projectionDef

The projections definition as a string (e. g. `"+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs"`) or as an Object formed by [proj4](https://www.npmjs.com/package/proj4).

- **Type**: `string` | `ProjectionDefinition`
- **Required**

### projectionExtent

The validity extent for the projection

- **Type**: `[number, number, number, number]` | `Extend` | `undefined`
