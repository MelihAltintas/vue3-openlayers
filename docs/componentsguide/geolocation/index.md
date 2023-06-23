# ol-geolocation

> HTML5 Geolocation wrapper

`ol-geoloc` provides HTML5 Geolocation capabilities as a Vue component.
The [Geolocation API](https://www.w3.org/TR/geolocation-API/) is used to locate
a user's position. You can place it to the **default slot** of `ol-map` component.

<script setup>
import GeoLocationDemo from "@demos/GeoLocationDemo.vue"
</script>

<ClientOnly>
<GeoLocationDemo />
</ClientOnly>

::: code-group

<<< src/demos/GeoLocationDemo.vue

:::

## Properties

### tracking

- **Type**: `boolean`
- **Default**: `true`

Enables / disables tracking.

### tracking-options

- **Type**: `Object`
- **Default**: `undefined`

Tracking options. See [PositionOptions](https://www.w3.org/TR/geolocation-API/#position_options_interface) documentation.

### projection

- **Type**: `string`
- **Default**: `EPSG:3857`

Projection of the current position.

## Emits

- `positionChanged`
- `speedChanged`
- `headingChanged`
- `altitudeChanged`
- `altitudeAccuracyChanged`
- `accuracyGeometryChanged`
