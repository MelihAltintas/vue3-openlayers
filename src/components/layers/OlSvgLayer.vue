<template>
  <div ref="svgContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  provide,
  onUnmounted,
  onMounted,
  watch,
  computed,
  type Ref,
  ref,
} from "vue";
import Layer from "ol/layer/Layer";
import type Map from "ol/Map";
import type { OverviewMap } from "ol/control";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  layersCommonDefaultProps,
  type LayersCommonProps,
} from "@/components/layers/LayersCommonProps";
import type LayerGroup from "ol/layer/Group";
import { composeCssTransform } from "ol/transform.js";

const props = withDefaults(
  defineProps<
    LayersCommonProps & {
      preload?: number;
    }
  >(),
  {
    ...layersCommonDefaultProps,
    width: 2560,
    height: 1280,
  }
);

const map = inject<Map>("map");
const layerGroup = inject<LayerGroup | null>("layerGroup", null);
const overViewMap = inject<Ref<OverviewMap | null> | null>("overviewMap", null);

const svgContainer = ref<HTMLElement | null>(null);

const { properties } = usePropsAsObjectProperties(props);

const svgResolution = computed(() => 360 / props.width);

const svgLayer = computed(
  () =>
    new Layer({
      ...properties,
      render: function (frameState) {
        const scale = svgResolution.value / frameState.viewState.resolution;
        const center = frameState.viewState.center;
        const size = frameState.size;
        const cssTransform = composeCssTransform(
          size[0] / 2,
          size[1] / 2,
          scale,
          scale,
          frameState.viewState.rotation,
          -center[0] / svgResolution.value - props.width / 2,
          center[1] / svgResolution.value - props.height / 2
        );
        if (svgContainer.value) {
          svgContainer.value.style.transform = cssTransform;
          svgContainer.value.style.opacity = `${this.opacity}`;
        }
        return svgContainer.value!;
      },
    })
);

const applySvgLayer = () => {
  if (layerGroup) {
    const layerCollection = layerGroup.getLayers();
    layerCollection.push(svgLayer.value);
    layerGroup.setLayers(layerCollection);
  }
  if (overViewMap?.value) {
    overViewMap.value?.getOverviewMap().addLayer(svgLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.addLayer(svgLayer.value);
  }
};

const removeTileLayer = () => {
  if (overViewMap?.value) {
    overViewMap.value?.getOverviewMap().removeLayer(svgLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.removeLayer(svgLayer.value);
  }
};

if (overViewMap?.value) {
  watch(overViewMap, () => {
    removeTileLayer();
    applySvgLayer();
  });
}

onMounted(() => {
  applySvgLayer();
});

onUnmounted(() => {
  removeTileLayer();
});

provide("svgLayer", svgLayer);
provide("svgContainer", svgContainer);

defineExpose({
  svgLayer,
  svgContainer,
});
</script>
