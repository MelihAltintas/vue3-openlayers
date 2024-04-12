

# [7.0.0-1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.5.0...v7.0.0-1) (2024-04-12)


### chore

* set minimum peerDependency of OpenLayers to version 9.1.0 ([8ae195c](https://github.com/MelihAltintas/vue3-openlayers/commit/8ae195c9812626c755e3a6e31e067ee6c3e8bd72))
* set minimum peerDependency of vue to version 3.4.15 ([158f00e](https://github.com/MelihAltintas/vue3-openlayers/commit/158f00ed577f682b0f880e93c1881cb8d7560220))


### Code Refactoring

* **ol-animation-feature:** remove unused exported component `ol-animation-feature` ([90f082a](https://github.com/MelihAltintas/vue3-openlayers/commit/90f082a39b4cea7e36071461de017735cd071582))


### Performance Improvements

* prevent watching reactive props continously ([45f9326](https://github.com/MelihAltintas/vue3-openlayers/commit/45f9326668d5de5853b34fd6315738be413a38fe))


### BREAKING CHANGES

* **ol-animation-feature:** The component `ol-animation-feature` was simply exposing the map, vectorLayer and it's passed properties. There was no need to use this component at all and therefore it has been removed. However, when the component was used in the past, make sure to remove it from your template and move the `ref`'s for map and the layer to the correct components.
* The minimum version of Vue is now 3.4.15 (`npm i vue@^3.4.15`)
* The minimum version of OpenLayers is now 9.1.0 (`npm i ol@^9.1.0`)
* the composable `usePropsAsObjectProperties` which is used as foundation in all components has been refactored.
Props were watched always deeply and for lot's of components this was done multiple times since the components implement watchers by themselves.
However, even if not expected, this may cause some side effects with reactive changes which must be applied for individual components when not implemented and therefore considered as a breaking change.
Please check your app carefully when updating to the new major version.

# [7.0.0-0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.5.0...v7.0.0-0) (2024-04-11)


### Performance Improvements

* prevent watching reactive props continously ([14af7e0](https://github.com/MelihAltintas/vue3-openlayers/commit/14af7e0c9cd4f8d5c30c8d75f59f5ff4b10b0e8f))


### BREAKING CHANGES

* the composable `usePropsAsObjectProperties` which is used as foundation in all components has been refactored.
Props were watched always deeply and for lot's of components this was done multiple times since the components implement watchers by themselves.
However, even if not expected, this may cause some side effects with reactive changes which must be applied for individual components when not implemented and therefore considered as a breaking change.
Please check your app carefully when updating to the new major version.

# [6.5.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.4.1...v6.5.0) (2024-04-05)


### Features

* add loading class and document how to show loading spinner ([0ada740](https://github.com/MelihAltintas/vue3-openlayers/commit/0ada740aca68d44c46f88996d458e2af9311278a))
* **ol-interaction-link:** add interaction for sync with URL query params ([4fdd742](https://github.com/MelihAltintas/vue3-openlayers/commit/4fdd74258c192e3345d6db5dff9c5664af84f5a2))

## [6.4.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.4.0...v6.4.1) (2024-04-03)


### Bug Fixes

* **ol-source-vector:** watch for features changes and update source ([4125541](https://github.com/MelihAltintas/vue3-openlayers/commit/4125541cd670b42aa3582d1eb999dcb702a9f6a1)), closes [#312](https://github.com/MelihAltintas/vue3-openlayers/issues/312)

# [6.4.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.3.2...v6.4.0) (2024-04-03)


### Features

* **ol-context-menu-control:** propagate events ([7c1dd70](https://github.com/MelihAltintas/vue3-openlayers/commit/7c1dd7059c5a3d9945908ad9319c87000394d496)), closes [#325](https://github.com/MelihAltintas/vue3-openlayers/issues/325)

## [6.3.2](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.3.1...v6.3.2) (2024-03-31)


### Bug Fixes

* **ol-animated-cluster-layer:** prevent re-computation of cluster and layer in property changes ([c00d992](https://github.com/MelihAltintas/vue3-openlayers/commit/c00d992af0ac37311053e2211a4e231f6cfbd352))
* **ol-source-vector:** make property changes reactive ([b476468](https://github.com/MelihAltintas/vue3-openlayers/commit/b476468b57dc2d2f389b5901dd5150c4a08aa164))

## [6.3.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.3.0...v6.3.1) (2024-03-30)


### Bug Fixes

* **ol-heatmap-layer:** handle property updates correctly ([e5bb81e](https://github.com/MelihAltintas/vue3-openlayers/commit/e5bb81e3d60e94254f58743960f2dd20589dab51))
* **ol-layer-group:** handle property updates correctly ([50462ec](https://github.com/MelihAltintas/vue3-openlayers/commit/50462ec35b2546bb43843ff2c83db6b4e0f772ee))

# [6.3.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.2.1...v6.3.0) (2024-03-25)


### Bug Fixes

* **ol-overlay:** prevent re-compute overlay, use shallowRef instead and watch property changes ([b1bb37e](https://github.com/MelihAltintas/vue3-openlayers/commit/b1bb37e93f48bc5930447adad20dd74d2e65be30)), closes [#257](https://github.com/MelihAltintas/vue3-openlayers/issues/257)


### Features

* **ol-interaction-dragbox:** add DragBox component wrapper ([3eb1fff](https://github.com/MelihAltintas/vue3-openlayers/commit/3eb1fff345b81c2990e5aa84eaedea3b39164e19)), closes [#307](https://github.com/MelihAltintas/vue3-openlayers/issues/307)
* **ol-vector-layer:** add `background` property ([f51cd25](https://github.com/MelihAltintas/vue3-openlayers/commit/f51cd25d93820459209892d817c34be73094faf1))

## [6.2.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.2.0...v6.2.1) (2024-03-25)


### Bug Fixes

* **ol-webgl-tile-layer:** react on property changes ([bdfcab6](https://github.com/MelihAltintas/vue3-openlayers/commit/bdfcab60952ba3da8e2a12c742e7d7bee3ff45d1)), closes [#319](https://github.com/MelihAltintas/vue3-openlayers/issues/319)

# [6.2.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.1.2...v6.2.0) (2024-03-22)


### Bug Fixes

* **deps:** use compatible dependencies for vitest and coverage ([69221e7](https://github.com/MelihAltintas/vue3-openlayers/commit/69221e790b4c00c161ae3498216bae652344059f))


### Features

* **ol-profile-control:** add control for ol-ext/controls/Profile ([#318](https://github.com/MelihAltintas/vue3-openlayers/issues/318)) ([be78e90](https://github.com/MelihAltintas/vue3-openlayers/commit/be78e90863915876ab7809f477fb8625b066c532)), closes [#269](https://github.com/MelihAltintas/vue3-openlayers/issues/269)

## [6.1.2](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.1.1...v6.1.2) (2024-03-16)


### Bug Fixes

* **ol-webgl-tile-layer:** make TileLayer a computed ([974f155](https://github.com/MelihAltintas/vue3-openlayers/commit/974f1558e2230019f24a6c27dde0be199cc49703)), closes [#310](https://github.com/MelihAltintas/vue3-openlayers/issues/310)

## [6.1.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.1.0...v6.1.1) (2024-03-14)


### Bug Fixes

* upgrade ol-contextmenu to v5.4.0 ([#311](https://github.com/MelihAltintas/vue3-openlayers/issues/311)) ([c9b7858](https://github.com/MelihAltintas/vue3-openlayers/commit/c9b785832ce02dce0bd4a448235ff51f1d58003b))

# [6.1.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.0.1...v6.1.0) (2024-03-07)


### Features

* **ol-search-control:** add search control ([#309](https://github.com/MelihAltintas/vue3-openlayers/issues/309)) ([4f529f7](https://github.com/MelihAltintas/vue3-openlayers/commit/4f529f7b66810f296f86ac8197bafbefb2f01d73)), closes [#306](https://github.com/MelihAltintas/vue3-openlayers/issues/306)

## [6.0.1](https://github.com/MelihAltintas/vue3-openlayers/compare/v6.0.0...v6.0.1) (2024-03-07)


### Bug Fixes

* **demo:** use valid TileJSON URL ([df53716](https://github.com/MelihAltintas/vue3-openlayers/commit/df5371602353b517d6e6245d41d67ba00e852174))
* **ol-source-vector:** prevent frequent source re-creation ([9bb8777](https://github.com/MelihAltintas/vue3-openlayers/commit/9bb8777116d43e32fd49849ca33d1c3c921a9ef9)), closes [#297](https://github.com/MelihAltintas/vue3-openlayers/issues/297)
* return style in overrideStyleFunction ([838d5e3](https://github.com/MelihAltintas/vue3-openlayers/commit/838d5e3859ab1cf48b47f10775419b52b130bef3))

# [6.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v5.0.0...v6.0.0) (2024-03-06)


### Code Refactoring

* remove `ol-source-webglvector` component ([0930c70](https://github.com/MelihAltintas/vue3-openlayers/commit/0930c7040489827bcc4991fe1d22f2fadac3cd86))


### BREAKING CHANGES

* `ol-source-webglvector` has been removed in favor of `ol-source-vector` component. Use `ol-source-vector` from now on.

# [5.0.0](https://github.com/MelihAltintas/vue3-openlayers/compare/v4.1.0...v5.0.0) (2024-03-06)


### chore

* update to OpenLayers@v9 ([d440029](https://github.com/MelihAltintas/vue3-openlayers/commit/d4400298be2c7ec768082cc7ad6fb56226baf9b4))


### Features

* remove `ol-webgl-points-layer` and `ol-source-webglpoints` components ([61950aa](https://github.com/MelihAltintas/vue3-openlayers/commit/61950aab9462aa17ff2640393938f44f0efdab8b))


### BREAKING CHANGES

* a peerDependency of `ol@^9.0.0` and `ol-ext@^4.0.15` is now required
* components `ol-webgl-points-layer` and `ol-source-webglpoints` are removed. Please use `ol-webgl-vector-layer` and `ol-source-vector` to display points using WebGL

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
