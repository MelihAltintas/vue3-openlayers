<template>
  <ol-map style="height: 400px">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
      @resolutionChanged="resolutionChanged"
      @rotationChanged="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>

  <div>
    center : {{ currentCenter }} zoom : {{ currentZoom }} resolution :
    {{ currentResolution }} rotation : {{ currentRotation }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    return {
      center,
      projection,
      zoom,
      rotation,
    };
  },
  data() {
    return {
      currentCenter: this.center,
      currentZoom: this.zoom,
      currentResolution: this.resolution,
      currentRotation: this.rotation,
    };
  },
  methods: {
    zoomChanged(currentZoom) {
      this.currentZoom = currentZoom;
    },
    resolutionChanged(resolution) {
      this.currentResolution = resolution;
    },
    centerChanged(center) {
      this.currentCenter = center;
    },
    rotationChanged(rotation) {
      this.currentRotation = rotation;
    },
  },
};
</script>
