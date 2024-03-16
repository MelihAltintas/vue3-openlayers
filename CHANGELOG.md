

## [5.0.2](https://github.com/MelihAltintas/vue3-openlayers/compare/v5.0.1...v5.0.2) (2024-03-16)


### Bug Fixes

* **ol-webgl-tile-layer:** make TileLayer a computed ([17cba2b](https://github.com/MelihAltintas/vue3-openlayers/commit/17cba2b3383d827bbf796728580a4ca749c62aa0)), closes [#310](https://github.com/MelihAltintas/vue3-openlayers/issues/310)

## [5.0.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v5.0.0...v5.0.1) (2024-03-07)


### Bug Fixes

* **ol-source-vector:** prevent frequent source re-creation ([57b739c](https://github.com/MelihAltintas/vue3-openlayers/commit/57b739c051085dea5e6a2de24b63a56cd0591ff9)), closes [#297](https://github.com/MelihAltintas/vue3-openlayers/issues/297)

# [5.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v4.1.0...v5.0.0) (2024-03-06)


### chore

* update to OpenLayers@v9 ([d440029](https://github.com/MelihAltintas/vue3-openlayers/commit/d4400298be2c7ec768082cc7ad6fb56226baf9b4))


### Features

* remove `ol-webgl-points-layer` and `ol-source-webglpoints` components ([61950aa](https://github.com/MelihAltintas/vue3-openlayers/commit/61950aab9462aa17ff2640393938f44f0efdab8b))


### BREAKING CHANGES

* a peerDependency of `ol@^9.0.0` and `ol-ext@^4.0.15` is now required
* components `ol-webgl-points-layer` and `ol-source-webglpoints` are removed. Please use `ol-webgl-vector-layer` and `ol-source-webglvector` to display points using WebGL

# [4.1.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v4.0.2...v4.1.0) (2024-03-06)


### Bug Fixes

* **ol-style:** add missing return statement in OlStyle ([#305](https://github.com/MelihAltintas/vue3-openlayers/issues/305)) ([f87ead7](https://github.com/MelihAltintas/vue3-openlayers/commit/f87ead7086e53301fc87dffb0759d5fdac16323f))


### Features

* provide `ol-webgl-points-layer` and `ol-source-webglpoints` components ([7c14476](https://github.com/MelihAltintas/vue3-openlayers/commit/7c14476a330010616e05d98dea9b7014cb7158dc)), closes [#300](https://github.com/MelihAltintas/vue3-openlayers/issues/300)

## [4.0.2](https://github.com/MelihAltintas/vue3-openlayers/compare/v4.0.1...v4.0.2) (2024-01-23)


### Bug Fixes

* **vite:** styles export ([8eb3559](https://github.com/MelihAltintas/vue3-openlayers/commit/8eb3559b716f802ed26b2904416bb7a5a3d82f16))

## [4.0.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v4.0.0...v4.0.1) (2023-12-18)


### Bug Fixes

* **ol-image-layer:** correctly access and provide layer ([3e509db](https://github.com/MelihAltintas/vue3-openlayers/commit/3e509db56d74d755331cbbd2d1baf05ea1a73cb1))
* **ol-webgl-tile-layer:** pass correct defaults ([994d1b0](https://github.com/MelihAltintas/vue3-openlayers/commit/994d1b07274e0ed464f89eadb80080c65b93a400))

# [4.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.2.1...v4.0.0) (2023-12-17)


### Bug Fixes

* **ol-style-icon:** allow to pass either `scale` or `width`/`height` property ([0f3f889](https://github.com/MelihAltintas/vue3-openlayers/commit/0f3f8896b76136bba53833a62f7b9c29cde9d12d)), closes [#288](https://github.com/MelihAltintas/vue3-openlayers/issues/288)


### chore

* update dependencies and peerDependency list ([3e9b311](https://github.com/MelihAltintas/vue3-openlayers/commit/3e9b311375a23a3c98b1e011de7ec20ffccc41aa))


### Code Refactoring

* **OlSourceTianditu:** rename `OlSourceTianDiTu` to `OlSourceTianditu` ([71beec4](https://github.com/MelihAltintas/vue3-openlayers/commit/71beec4a00d11e1d359311a5e9e6d00e513c811f)), closes [#281](https://github.com/MelihAltintas/vue3-openlayers/issues/281)


### BREAKING CHANGES

* * Drop support for Node.js Versions 16
* requires a peer dependency of `ol@^8.2.0`
* requires a peer dependency of `ol-ext@^4.0.13`
* **ol-style-icon:** **`ol-style-icon`**: the property `scale` has no longer a default of `1`. Please pass a value of one explicitly if needed. The change was needed since the underlying OpenLayers lib want's to either have a `scale` defined or  `width`/`height`. Before it wasn't possible to define an icon by `width`/`height` since the `scale` was set by default.
* **OlSourceTianditu:** - renamed `OlSourceTianDiTu` to `OlSourceTianditu`

## [3.2.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.2.0...v3.2.1) (2023-12-17)


### Bug Fixes

* handle visibility and opacity changes ([733fde8](https://github.com/MelihAltintas/vue3-openlayers/commit/733fde88e8ccd8a22d36560334852aceda230673)), closes [#277](https://github.com/MelihAltintas/vue3-openlayers/issues/277)

# [3.2.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.1.0...v3.2.0) (2023-12-03)


### Features

* **ol-style-text:** fill and stroke properties for the text ([#283](https://github.com/MelihAltintas/vue3-openlayers/issues/283)) ([111be7c](https://github.com/MelihAltintas/vue3-openlayers/commit/111be7c60ddcbc5e9c504a10da69b619c28bc512))

# [3.1.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.0.0...v3.1.0) (2023-11-08)


### Bug Fixes

* **ol-source-vector-tile:** listen to / pass correct events ([abe37e9](https://github.com/MelihAltintas/vue3-openlayers/commit/abe37e9e447543c2f2a43d7e96d4ac74103578be)), closes [#271](https://github.com/MelihAltintas/vue3-openlayers/issues/271)


### Features

* **ol-interaction-transform:** relay events ([350c4e3](https://github.com/MelihAltintas/vue3-openlayers/commit/350c4e3afea1b57070bcc4980f89db197f7a120e)), closes [#270](https://github.com/MelihAltintas/vue3-openlayers/issues/270)

# [3.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.0.0-3...v3.0.0) (2023-10-26)

### Bug Fixes

* add provided for external module for GeoTIFF and OverviewMap ([ac39fb2](https://github.com/MelihAltintas/vue3-openlayers/commit/ac39fb2b0703f5356160a44aa1ade9b64471896b))
* **ol-view:** re-enable rotation ([57c9a95](https://github.com/MelihAltintas/vue3-openlayers/commit/57c9a95156b9515705b7d66b95004aaf009d1f22))
* **demo:** use scoped styles and cleanup unused styles ([3d7fba4](https://github.com/MelihAltintas/vue3-openlayers/commit/3d7fba4c117a612351f3575bf7be918a26642a49))

### Code Refactoring

* **ol-overviewmap-control:** adopt OpenLayers API and fix layers rendering ([fd82d1a](https://github.com/MelihAltintas/vue3-openlayers/commit/fd82d1a6cc3274a425b679d0afba4595274853e9))
* **ol-webgl-tile-layer:** adopt OpenLayers API and fix layers rendering ([4d44b21](https://github.com/MelihAltintas/vue3-openlayers/commit/4d44b213c00af8e292f0307491e77eea81446b9b))

### Features

* **ol-vector-tile-layers:** add support for `renderMode` property ([116b576](https://github.com/MelihAltintas/vue3-openlayers/commit/116b576e1da6f9e99ea4d06e584e8221e6deb20b)), closes [#263](https://github.com/MelihAltintas/vue3-openlayers/issues/263)
* **ol-source-geo-tiff:** add new source for GeoTIFF ([78dc2c6](https://github.com/MelihAltintas/vue3-openlayers/commit/78dc2c68477c643d0d5d714e9791c3b9361d0b45))
* **ol-animated-clusterlayer:** emit all Cluster events ([0867d4b](https://github.com/MelihAltintas/vue3-openlayers/commit/0867d4b8cca6a203bed6f95aa73aaae41fd6329c))
* **ol-videorecorder-control:** pass-through all props and events from `ol-ext` ([fb99807](https://github.com/MelihAltintas/vue3-openlayers/commit/fb99807d367f13736b5b597cbb6e85b2a425a4f1))
* **ol-map:** feat(ol-map) support all Map events from OpenLayers on component. Newly supported events are:
  - `change:size`
  - `change:target`
  - `change:view`
  - `rendercomplete`
  Please refer to the [OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)
* **ol-videorecorder-control**: pass-through all props and events from `ol-ext`
  - if not `downloadName` is set, the file will not be downloaded but the `stop` event is fired with the blob data/url.
  - all events are now fired. In addition to the already existing `start` and `stop` event, you can now also react to the `pause` and `resume` event
  - docs has been updated

### BREAKING CHANGES

* **ol-webgl-tile-layer:** use [props and default values from openlayers directly](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html)
* **ol-overviewmap-control:** use props and default values from openlayers directly. render component from slot in overview map
- **`ol-overlay`** all properties are now passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html). Potentially this hasn't changed anything yet, but it can in the future, if OpenLayers changes it's API
- **`ol-overlay`** all events are now fired at component level [as defined in OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html). Details:
  - `elementChanged` is now emitted as `change:element`
  - `offsetChanged` is now emitted as `change:offset`
  - `positionChanged` is now emitted as `change:position`
  - `positioningChanged` is now emitted as `change:positioning`
- **`ol-view`**: property `center`'s default value has been removed (it was set `[0, 0]`) before. Now all [default values from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) are used directly
- **`ol-view`**: All [Events  from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) are emitted as component events directly now. Please change:
  - `resolutionChanged` to `change:resolution`
  - `rotationChanged` to `change:rotation`
  - `rotationChanged` to `change:rotation`
  - `centerChanged` to `change:center`
  - `zoomChanged` event has been dropped. Please use `change:center` or `change:resolution` instead
- **`ol-map`**: properties with default values are now aligned with all [default values from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)


# [3.0.0-3](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.0.0-2...v3.0.0-3) (2023-09-24)


### Code Refactoring

* **ol-overviewmap-control:** adopt OpenLayers API and fix layers rendering ([fd82d1a](https://github.com/MelihAltintas/vue3-openlayers/commit/fd82d1a6cc3274a425b679d0afba4595274853e9))
* **ol-webgl-tile-layer:** adopt OpenLayers API and fix layers rendering ([4d44b21](https://github.com/MelihAltintas/vue3-openlayers/commit/4d44b213c00af8e292f0307491e77eea81446b9b))


### Features

* **ol-source-geo-tiff:** add new source for GeoTIFF ([78dc2c6](https://github.com/MelihAltintas/vue3-openlayers/commit/78dc2c68477c643d0d5d714e9791c3b9361d0b45))


### BREAKING CHANGES

* **ol-webgl-tile-layer:** use [props and default values from openlayers directly](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html)
* **ol-overviewmap-control:** use props and default values from openlayers directly. render component from slot in overview map

# [3.0.0-2](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.0.0-1...v3.0.0-2) (2023-09-22)


### Bug Fixes

* **ol-view:** re-enable rotation ([57c9a95](https://github.com/MelihAltintas/vue3-openlayers/commit/57c9a95156b9515705b7d66b95004aaf009d1f22))

# [3.0.0-1](https://github.com/MelihAltintas/vue3-openlayers/compare/v3.0.0-0...v3.0.0-1) (2023-09-20)


### Features

* **ol-animated-clusterlayer:** emit all Cluster events ([0867d4b](https://github.com/MelihAltintas/vue3-openlayers/commit/0867d4b8cca6a203bed6f95aa73aaae41fd6329c))

# [3.0.0-0](https://github.com/MelihAltintas/vue3-openlayers/compare/v2.0.0...v3.0.0-0) (2023-09-20)

### Bug Fixes

* **demo:** use scoped styles and cleanup unused styles ([3d7fba4](https://github.com/MelihAltintas/vue3-openlayers/commit/3d7fba4c117a612351f3575bf7be918a26642a49))

### Features

* **ol-videorecorder-control:** pass-through all props and events from `ol-ext` ([fb99807](https://github.com/MelihAltintas/vue3-openlayers/commit/fb99807d367f13736b5b597cbb6e85b2a425a4f1))
* **ol-map:** feat(ol-map) support all Map events from OpenLayers on component. Newly supported events are:
  - `change:size`
  - `change:target`
  - `change:view`
  - `rendercomplete`
  Please refer to the [OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)
* **ol-videorecorder-control**: pass-through all props and events from `ol-ext`
  - if not `downloadName` is set, the file will not be downloaded but the `stop` event is fired with the blob data/url.
  - all events are now fired. In addition to the already existing `start` and `stop` event, you can now also react to the `pause` and `resume` event
  - docs has been updated

### BREAKING CHANGES

- **`ol-overlay`** all properties are now passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html). Potentially this hasn't changed anything yet, but it can in the future, if OpenLayers changes it's API
- **`ol-overlay`** all events are now fired at component level [as defined in OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html). Details:
  - `elementChanged` is now emitted as `change:element`
  - `offsetChanged` is now emitted as `change:offset`
  - `positionChanged` is now emitted as `change:position`
  - `positioningChanged` is now emitted as `change:positioning`
- **`ol-view`**: property `center`'s default value has been removed (it was set `[0, 0]`) before. Now all [default values from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) are used directly
- **`ol-view`**: All [Events  from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) are emitted as component events directly now. Please change:
  - `resolutionChanged` to `change:resolution`
  - `rotationChanged` to `change:rotation`
  - `rotationChanged` to `change:rotation`
  - `centerChanged` to `change:center`
  - `zoomChanged` event has been dropped. Please use `change:center` or `change:resolution` instead
- **`ol-map`**: properties with default values are now aligned with all [default values from OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)

# [2.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v2.0.0-1...v2.0.0) (2023-09-14)

### Bug Fixes

- allow multiple plugin installation ([#247](https://github.com/MelihAltintas/vue3-openlayers/issues/247)) ([9a3b133](https://github.com/MelihAltintas/vue3-openlayers/commit/9a3b133de757afbd5d8ea6a028f19aa30f91d8ef))
- allow using controls as childs of bar ([#248](https://github.com/MelihAltintas/vue3-openlayers/issues/248)) ([8d59c76](https://github.com/MelihAltintas/vue3-openlayers/commit/8d59c7620320adcd146ff5e21aee2d60811e513c))
- correctly remove controls onUnmounted ([3756fbb](https://github.com/MelihAltintas/vue3-openlayers/commit/3756fbb7175889ac1d505cfa65010e81aea46d26)), closes [#246](https://github.com/MelihAltintas/vue3-openlayers/issues/246)

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

### Features

- **ol-source-tile-debug:** provide new component for TileDebug ([b009f7b](https://github.com/MelihAltintas/vue3-openlayers/commit/b009f7bc923782db2d3a6dd836dab4a762d4f78c)), closes [#250](https://github.com/MelihAltintas/vue3-openlayers/issues/250)

# [1.3.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.2.2...v1.3.0) (2023-09-14)

### Bug Fixes

- allow multiple plugin installation ([#247](https://github.com/MelihAltintas/vue3-openlayers/issues/247)) ([edbbdc3](https://github.com/MelihAltintas/vue3-openlayers/commit/edbbdc38dfb606d6c77a088f231585cec270a700))
- allow using controls as childs of bar ([#248](https://github.com/MelihAltintas/vue3-openlayers/issues/248)) ([9bc69cd](https://github.com/MelihAltintas/vue3-openlayers/commit/9bc69cd369d29dcf01dd8754b7099b882091f087))

### Features

- **ol-source-tile-debug:** provide new component for TileDebug ([943cc29](https://github.com/MelihAltintas/vue3-openlayers/commit/943cc2965e2d731b3ac7bed3f4751904ce471a3f)), closes [#250](https://github.com/MelihAltintas/vue3-openlayers/issues/250)

# [2.0.0-1](https://github.com/MelihAltintas/vue3-openlayers/compare/v1.2.1...v2.0.0-1) (2023-09-08)

### Bug Fixes

- correctly remove controls onUnmounted ([3756fbb](https://github.com/MelihAltintas/vue3-openlayers/commit/3756fbb7175889ac1d505cfa65010e81aea46d26)), closes [#246](https://github.com/MelihAltintas/vue3-openlayers/issues/246)

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
