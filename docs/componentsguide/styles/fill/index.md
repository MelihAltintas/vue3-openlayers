# ol-style-fill

> Color the filling of a polygon or mulipolygon in a vector layer

Use it inside ol-style, ol-style-circle, ol-style-text along with ol-style-stroke to style polygons and other shapes with area like circles.

[[toc]]

## Demo

<script setup>
import MultiPoint from "@demos/MultiPoint.vue"
</script>
<ClientOnly>
<MultiPoint />
</ClientOnly>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage      |    Explicit Import     |
| ----------------- | :--------------------: |
| `<ol-style-fill>` | `<Styles.OlStyleFill>` |

Styling a feature

::: code-group

<<< ../../../../src/demos/MultiPoint.vue

:::

## Properties

### color

- **Type**: `Number`

The color either in hexadecimal or as RGB array with red, green, and blue values between 0 and 255 and alpha between 0 and 1 inclusive.

### gradient
- **Type**: `Object`
```
{
  "type": "linear", // Type of gradient. Here, it's a linear gradient.
  "x0": 0, // x-coordinate of the starting point. Indicates the horizontal position where the gradient starts.
  "y0": 0, // y-coordinate of the starting point. Indicates the vertical position where the gradient starts.
  "x1": 0, // x-coordinate of the ending point. This is the horizontal position where the gradient ends. It’s the same as x0, meaning the gradient is vertical.
  "y1": 256, // y-coordinate of the ending point. Indicates the vertical position where the gradient ends, extending the gradient to y = 256.
  "colorStops": [
    [0, "red"], // Start color at position 0. The color at the beginning of the gradient is red.
    [0.5, "yellow"], // Middle color at position 0.5. The color at the midpoint of the gradient (y = 128) is yellow.
    [1, "green"] // End color at position 1. The color at the end of the gradient (y = 256) is green.
  ],
  width: number; // Used to calculate gradient colors
  height: number; // Used to calculate gradient colors
}

{
  "type": "radial", // Type of gradient. Here, it's a radial gradient.
  "x0": 128, // x-coordinate of the starting circle's center. Specifies the horizontal position of the starting circle.
  "y0": 128, // y-coordinate of the starting circle's center. Specifies the vertical position of the starting circle.
  "r0": 0, // Radius of the starting circle. Here, it's 0, meaning the gradient starts at a single point.
  "x1": 128, // x-coordinate of the ending circle's center. Same as x0, so the ending circle is centered at the same horizontal position.
  "y1": 128, // y-coordinate of the ending circle's center. Same as y0, so the ending circle is centered at the same vertical position.
  "r1": 128, // Radius of the ending circle. Specifies the radius of the circle where the gradient ends, extending to a radius of 128 units.
  "colorStops": [
    [0, "blue"], // Color at the center of the gradient (r = 0). The color at the very center of the radial gradient is blue.
    [0.5, "cyan"], // Color at the midpoint of the gradient. At the midpoint of the radius (r = 64), the color is cyan.
    [1, "white"] // Color at the edge of the gradient (r = 128). The color at the outer edge of the radial gradient is white.
  ],
  width: number; // Used to calculate gradient colors
  height: number; // Used to calculate gradient colors
}

```