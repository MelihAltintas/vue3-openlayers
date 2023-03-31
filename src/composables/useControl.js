import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default function useControl(ControlType, props, context) {
  const map = inject("map");
  const controlBar = inject("controlBar", null);

  const parent = controlBar != null ? controlBar.value : map;

  const { properties } = usePropsAsObjectProperties(props);

  const control = computed(
    () =>
      new ControlType({
        ...properties,
      })
  );

  control.value.set(
    "order",
    context.attrs.order == undefined ? 0 : context.attrs.order
  );

  watch(control, (newVal, oldVal) => {
    if (parent.removeControl) {
      parent.removeControl(oldVal);
      parent.addControl(newVal);
      map.changed();
    }
  });

  onMounted(() => {
    parent.addControl(control.value);
    if (parent.controls_ != undefined) {
      const sortedControls = [...parent.controls_];
      sortedControls.sort((a, b) => a.get("order") - b.get("order"));

      parent.controls_ = [];

      sortedControls.forEach((c) => {
        parent.addControl(c);
      });

      parent.changed();
    }

    map.changed();
  });

  onUnmounted(() => {
    if (parent.removeControl) {
      parent.removeControl(control.value);
    } else {
      // ol-ext controls
      const index = parent.controls_.findIndex((a) => a == control.value);
      parent.controls_.splice(index, 1);
      control.value.dispose();
    }
    map.changed();
  });

  return {
    map,
    control,
  };
}
