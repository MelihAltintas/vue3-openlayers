import useControl from "./useControl";
import { defineProps } from "vue";

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

export default function useLayerControl(controlType, attrs) {
  useControl(controlType, props, { attrs });

  return {
    props,
  };
}
