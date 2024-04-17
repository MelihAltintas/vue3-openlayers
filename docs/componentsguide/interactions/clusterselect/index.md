# ol-interaction-clusterselect

> Interaction for selecting vector cluster features

The interaction components wraps `SelectCluster` interaction of the [famous `ol-ext` OpenLayers extension](http://viglino.github.io/ol-ext/).

[[toc]]

## Demo

<script setup>
import AnimatedClusterDemo from "@demos/AnimatedClusterDemo.vue"
</script>

<ClientOnly>
<AnimatedClusterDemo />
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage                     |               Explicit Import               |
|----------------------------------|:-------------------------------------------:|
| `<ol-interaction-clusterselect>` | `<Interactions.OlInteractionClusterselect>` |

::: code-group

<<< ../../../../src/demos/AnimatedClusterDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from `ol-ext` directly.
Their types and default values can be checked-out [in the official OpenLayers docs](http://viglino.github.io/ol-ext/doc/doc-pages/ol.interaction.SelectCluster.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.
