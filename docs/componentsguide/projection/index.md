# ol-projection-register

> Register a custom projection

`ol-projection-register` component creates the given projection definition and makes it available to use with OpenLayers.

<script setup>
import ProjectionRegisterDemo from "@demos/ProjectionRegisterDemo.vue"
</script>

<ClientOnly>
<ProjectionRegisterDemo />
</ClientOnly>

## Usage

Example below shows how to register and use a custom projection on to the map.

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-projection-register
      :projectionName="projectionName"
      :projectionDef="projectionDef"
      :projectionExtent="projectionExtent"
    />
    <ol-view
      ref="view"
      :center="center"
      :projection="projectionName"
      :extend="projectionExtent"
      :zoom="3"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
const center = [312234.8270497762, 2636116.2213047906];
const projectionName = "EPSG:32640";
const projectionDef = "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs";
const projectionExtent = [
  -98570.85212537996, 2468701.5790765425, 683268.1076887846, 2874585.9453238174,
];
</script>
```

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
