import { easeOut } from "ol/easing";

export default function useBaseLayerProps() {
  return {
    duration: {
      type: Number,
      default: 1000,
    },
    revers: {
      type: Boolean,
      default: false,
    },
    repeat: {
      type: Number,
      default: 0,
    },

    fade: {
      type: Function,
    },
    easing: {
      type: Function,
      default: easeOut,
    },
  };
}
