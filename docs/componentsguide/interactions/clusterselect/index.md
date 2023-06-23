# ol-interaction-clusterselect

> Interaction for selecting vector cluster features

<script setup>
import AnimatedClusterDemo from "@demos/AnimatedClusterDemo.vue"
</script>

<ClientOnly>
<AnimatedClusterDemo />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/AnimatedClusterDemo.vue

:::

## Properties

### multi

- **Type**: `String`

### filter

- **Type**: `Function`

### condition

- **Type**: `Function`

### pointRadius

Radius to calculate distance between the features

- **Type**: `Number`
- **Default**: `7`

### animate

If the cluster will animate when features spread out.

- **Type**: `Boolean`
- **Default**: `true`

### animationDuration

- **Type**: `Number`
- **Default**: `500`

### circleMaxObjects

Number of objects that can be placed on a circle.

- **Type**: `Number`

### maxObjects

Number of objects that can be drawn, other are hidden.

- **Type**: `Number`

### spiral

- **Type**: `Boolean`
- **Default**: `true`

### selectCluster

`false` if you don't want to get cluster selected.

- **Type**: `Boolean`
- **Default**: `true`

### autoClose

If selecting a cluster should close previously selected clusters.
Set to`false` to get toggle feature.

- **Type**: `Boolean`
- **Default**: `true`

### featureStyle

It is used to style the revealed features as options
The style is used by the Select interaction.

- **Type**: `Function`

### style

- **Type**: `Function`
