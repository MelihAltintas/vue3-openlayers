import Overlay from "ol/Overlay";
import {
  inject,
  ref,
  watchEffect,
  watch,
  onMounted,
  onUnmounted,
  computed,
} from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
export default function useOverlay(props, emit) {
  const map = inject("map");

  const htmlContent = ref(null);

  const { properties } = usePropsAsObjectProperties(props);

  let overlay = computed(() => new Overlay(properties));

  onMounted(() => {
    map.addOverlay(overlay.value);
  });

  onUnmounted(() => {
    map.removeOverlay(overlay.value);
  });

  watch(overlay, (newVal, oldVal) => {
    map.removeOverlay(oldVal);
    map.addOverlay(newVal);
  });

  watchEffect(
    () => {
      setElement(htmlContent.value);
    },
    {
      flush: "post",
    }
  );

  overlay.value.on("change:element", () =>
    emit("elementChanged", getElement())
  );
  overlay.value.on("change:offset", () => emit("offsetChanged", getOffset()));
  overlay.value.on("change:position", () =>
    emit("positionChanged", getPosition())
  );
  overlay.value.on("change:positioning", () =>
    emit("positioningChanged", getPositioning())
  );

  const getElement = () => overlay.value.getElement();
  const getOffset = () => overlay.value.getOffset();
  const getPosition = () => overlay.value.getPosition();
  const getPositioning = () => overlay.value.getPositioning();

  const panIntoView = (opt_panIntoViewOptions) =>
    overlay.value.panIntoView(opt_panIntoViewOptions);

  const setElement = (element) => overlay.value.setElement(element);
  const setOffset = (offset) => overlay.value.setOffset(offset);
  const setPosition = (position) => overlay.value.setPosition(position);
  const setPositioning = (positioning) =>
    overlay.value.setPositioning(positioning);

  return {
    overlay,
    htmlContent,
    getOffset,
    getPosition,
    getPositioning,
    panIntoView,
    setElement,
    setOffset,
    setPosition,
    setPositioning,
  };
}
