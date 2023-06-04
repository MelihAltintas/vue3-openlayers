import useControl from "./useControl";
import { defineProps } from "vue";
import type LayerSwitcher from "ol-ext/control/LayerSwitcher";
import type LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";

const props = defineProps({
  selection: {
    type: Boolean,
  },
  displayInLayerSwitcher: {
    type: Function,
  },
  show_progress: {
    type: Boolean,
    default: false,
  },
  mouseover: {
    type: Boolean,
    default: false,
  },
  reordering: {
    type: Boolean,
    default: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
  oninfo: {
    type: Function,
  },
  extent: {
    type: Boolean,
  },
  onextent: {
    type: Function,
  },
  drawDelay: {
    type: Number,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  layerGroup: {
    type: Object,
  },
  noScroll: {
    type: Boolean,
    default: false,
  },
});

export default function useLayerControl(
  controlType: new (options?: any) => LayerSwitcher | LayerSwitcherImage,
  attrs: Record<string, unknown>
) {
  useControl(controlType, props, { attrs });

  return {
    props,
  };
}
