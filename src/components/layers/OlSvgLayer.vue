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
      width?: number;
      height?: number;
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

watch(
  () => properties.width,
  () => {
    removeSvgLayer();
    applySvgLayer();
  }
);

const svgLayer = ref();
function createSvgLayer() {
  return new Layer({
    ...properties,
    render: function (frameState) {
      const svgResolutionX = 40050000 / props.width;
      const svgResolutionY = 43650000 / props.width;
      const scaleX = svgResolutionX / frameState.viewState.resolution;
      const scaleY = svgResolutionY / frameState.viewState.resolution;
      const center = frameState.viewState.center;
      const size = frameState.size;

      const cssTransform = composeCssTransform(
        size[0] / 2,
        size[1] / 2,
        scaleX,
        scaleY,
        frameState.viewState.rotation,
        -center[0] / svgResolutionX - properties.width! / 2,
        center[1] / svgResolutionY - properties.height! / 2
      );

      if (svgContainer.value) {
        svgContainer.value.style.width = properties.width! + "px";
        svgContainer.value.style.height = properties.height! + "px";
        svgContainer.value.style.transformOrigin = "top left";
        svgContainer.value.className = "svg-layer";
        svgContainer.value.style.transform = cssTransform;
        svgContainer.value.style.opacity = `0.6`; // `${this.opacity}`;

        console.log("render", {
          cssTransform,
        });
      }
      return svgContainer.value!;
    },
  });
}

const applySvgLayer = () => {
  svgLayer.value = createSvgLayer();
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

const removeSvgLayer = () => {
  if (overViewMap?.value) {
    overViewMap.value?.getOverviewMap().removeLayer(svgLayer.value);
    overViewMap.value?.changed();
  } else {
    map?.removeLayer(svgLayer.value);
  }
};

if (overViewMap?.value) {
  watch(overViewMap, () => {
    removeSvgLayer();
    applySvgLayer();
  });
}

onMounted(() => {
  applySvgLayer();
});

onUnmounted(() => {
  removeSvgLayer();
});

provide("svgLayer", svgLayer);
provide("svgContainer", svgContainer);

defineExpose({
  svgLayer,
  svgContainer,
});
</script>
