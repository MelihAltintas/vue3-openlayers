# ol-context-menu-control

> A contextmenu extension for OpenLayers.

Right click on the map to open the contextmenu.

<script setup>
import ContextMenuDemo from "@demos/ContextMenuDemo.vue"
</script>
<ClientOnly>
<ContextMenuDemo />
</ClientOnly>

## Usage

Add context menu to map

::: code-group

<<< src/demos/ContextMenuDemo.vue

:::

## Properties

### eventType

- **Type**: `String`
- **Default**: `contextmenu`

The listening event type (You could use 'click', 'dblclick')

### defaultItems

- **Type**: `Boolean`
- **Default**: `true`

Whether the default items (which are: Zoom In/Out) are enabled

### width

- **Type**: `Number`
- **Default**: `150`

The menu's width

### items

- **Type**: `Array`
- **Default**: `[]`

An array of object|string
