import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default function useGeometry(GeometryType, props) {
  const feature = inject("feature");

  const { properties } = usePropsAsObjectProperties(props);

  const geometry = computed(
    () => new GeometryType(...Object.values(properties))
  );

  watch(properties, () => {
    feature.value.setGeometry(geometry.value);
    feature.value.changed();
  });

  watch(feature, () => {
    feature.value.setGeometry(geometry.value);
  });

  onMounted(() => {
    feature.value.setGeometry(geometry.value);
  });

  onUnmounted(() => {
    feature.value.setGeometry(null);
  });

  return {
    geometry,
  };
}
