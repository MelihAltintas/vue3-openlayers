# [2.0.0-0](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.2.1...v2.0.0-0) (2023-09-04)

### chore

- update dependency to openlayers 8.0.0 ([a76dd57](https://github.com/MelihAltintas/vue3-openlayers/commit/a76dd57acc12de72d7a674c207ca1fd89f30a6cd))

### Code Refactoring

- **ol-source-stadia-maps:** replace old ol-stamen component ([ff9e373](https://github.com/MelihAltintas/vue3-openlayers/commit/ff9e373b320186e4a3df7eda797bdfeba3d22bc2))
- **ol-style-icon:** pass-through properties from OpenLayers ([84232e9](https://github.com/MelihAltintas/vue3-openlayers/commit/84232e92ee42d586b0aad8ac99817f7c6a210cc7))
- **ol-webgl-points-layer:** use new flat style format ([02b8d1f](https://github.com/MelihAltintas/vue3-openlayers/commit/02b8d1f72cb7a31c1b07b413ff4eb0e7c0b6d364))

### BREAKING CHANGES

- **ol-webgl-points-layer:** use the [new introduced flat format from OpenLayers 8](https://github.com/openlayers/openlayers/blob/v8.0.0/changelog/upgrade-notes.md#change-of-the-symbol-style-format-in-ollayerwebglpointslayer)
- **ol-style-icon:** properties are passed-through from OpenLayers directly and property `imgSize` has been removed since it's [removed from OpenLayers 8](https://github.com/openlayers/openlayers/blob/v8.0.0/changelog/upgrade-notes.md#removal-of-olstyleicons-imgsize-property)
- **ol-source-stadia-maps:** The new component `ol-source-stadia-maps` replaced the old `ol-source-stamen` component. Please checkout the official [OpenLayers 8 release notes](https://github.com/openlayers/openlayers/blob/v8.0.0/changelog/upgrade-notes.md#new-stadiamaps-source-replaces-the-stamen-source) for further information.
- You need to have a peerDependency of `ol` >= `8.0.0` installed

## [1.2.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.2.0...v1.2.1) (2023-09-01)

### Bug Fixes

- remove exported non-existing function forEachLayerAtPixel ([27da611](https://github.com/MelihAltintas/vue3-openlayers/commit/27da6111a9957952351e5111a7572e7bdd843bcb))
- remove incompatible props and exposed functions ([81c6d00](https://github.com/MelihAltintas/vue3-openlayers/commit/81c6d00c47ac3448cb7de5bbf33c274e45fd4b7c)), closes [#231](https://github.com/MelihAltintas/vue3-openlayers/issues/231)

# [1.2.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.1.0...v1.2.0) (2023-07-26)

### Features

- add `ol-vector-tile-layer` and `ol-source-vector` components ([#229](https://github.com/MelihAltintas/vue3-openlayers/issues/229)) ([d7b4c0d](https://github.com/MelihAltintas/vue3-openlayers/commit/d7b4c0dbcb16767f8717bd0a3014666589448e2f)), closes [#228](https://github.com/MelihAltintas/vue3-openlayers/issues/228)

# [1.1.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.0.1...v1.1.0) (2023-07-25)

- chore(maintenance): update dependencies (258e396)
- docs(ol-map): add documentation for prop (b54312c)
- fix(ol-feature): prevent unresponsive map lag (989bc90)
- fix(ol-zone-control): define props with default values as optional (8275202)
- docs(ol-interaction-snap): add demo case for draw interaction (e588a5f)
- Update animatedclusterlayer, improve wording and fluency of explanation (#226) (3191963)
- docs(ol-geolocation): display icon position correctly (6ae205b)
- feat(ol-style-text): added backgroundFill and backgroundStroke props (#223) (6f521c9)

# [1.0.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.0.0...v1.0.1) (2023-07-18)

- chore: disable eslint for process access in version script (78455b0)
- docs: add note for output.globals (c4c6d0f)
- fix(build): update vite-plugin-dts and configure output.globals (#218) (fe739c4)
- refactor(ol-view): use ViewOptions interface and remove unneeded composable (5d139eb)
- refactor: remove unused useLayerControl (3ea0a99)
- fix(ol-geolocation): prevent Extraneous non-emits event listeners warning (11c14f1)
- docs: describe how to access ol/Map (5ab6231)
- docs: updated contribution guidelines (0c38dc3)
- docs: update getting started (65fed43)
- chore: update ISSUE_TEMPLATE (a0cf678)
- docs: update requirements automatically (cdbd12f)
- docs: replace 'Openlayers' with 'OpenLayers' (bd59efc)

# [1.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v0.5.1...v1.0.0) (2023-07-11)

Version `1.0.0` was completely refactored and aligned with the features and also **BREAKING CHANGES** from OpenLayers 7.x.x.
Please be sure to checkout the [Changelog](https://github.com/openlayers/openlayers/releases/) of OpenLayers as well.
Properties are mostly reflected 1:1 from OpenLayers as Component Properties for the related `vue3-openlayers` components. The same applies for the default values. Deviating properties with their values and description are listed in the [documentation](https://vue3openlayers.netlify.app/) for each component.

## Summary ([compared to version `0.5.1`](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.0.0...v0.5.1))

- 🛠️ migrated all components and features to TypeScript
- 👩🏻‍🔧 migrated all components to use [`<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html)
- 🗺️ aligned API with [OpenLayers 7.4.0](https://github.com/openlayers/openlayers/releases/tag/v7.4.0)
- 📘 updated & restructured the whole documentation
- 🧩 added new components: `ol-layer-group`, `ol-source-tile-json`, `ol-source-stadia-maps` and `ol-vector-image-layer`
- 🚀 expose all interactions to be able to call access them via `ref` in templates
- 🐞 lot's of bug fixes
- 📖 improved the documentation
- ✨ better types for improved developer experience

## Compability

Please be sure to install the following peerDependencies in your project:

```
"ol": "^7.4.0",
"ol-contextmenu": "^5.2.1",
"ol-ext": "^4.0.8"
```

## Breaking Changes

**general**: dropped support for Openlayers 6 and below. Please use Openlayers 7.x.x

**general**: lot's of property types have been updated to match with the types in Openlayers. This may lead to TypeScript issues that must be fixed. Please [have a look at all Changelog notes from the alpha and next releases](https://github.com/MelihAltintas/vue3-openlayers/releases) before.

**ol-geolocation**: pass-through original events from Openlayers directly and remove legacy events
The following events are not emitted anymore and replaced with the events from Openlayers.
All new events receive a generic [`ObjectEvent`](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html).
This means, changing only the event name in your templates isn't enough, you must adopt the implementations of the handler functions, so the will receive an `ObjectEvent` as first parameter.

- `positionChanged` -> `change:position`
- `speedChanged` -> `change:speed`
- `headingChanged` -> `change:heading`
- `altitudeChanged` -> `change:altitude`
- `altitudeAccuracyChanged` -> `change:altitudeAccuracy`
- `accuracyGeometryChanged` -> `change:accuracyGeometry`

Please refer to [the official Openlayers docs for Geolocation](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html) for details of the emitted event data format.

## Special Thanks 👏🏼

Special thanks goes to:

- @MelihAltintas for creating this awesome project, making it open source and enable other maintainers (like @d-koppenhagen) to improve it
- @mathiash98 for digging deep into the code and fixing tricky issues like #128 and #175
- @209, for the time invested and the laborious migration of the code base (PR https://github.com/MelihAltintas/vue3-openlayers/pull/149 was the basis for all the related commits)
- @lukas-zaugg and @pjreed for other important bug fixes and new features
- all other people who were not mentioned here but who also contributed to version 1.0.0 with their questions and issues 🙌🏼
