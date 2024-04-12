import type { Ref } from "vue";
import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import type featureType from "ol/Feature";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { Geometry } from "ol/geom";

export default function useGeometry<T extends Geometry>(
  GeometryType: { new (...args: never[]): T },
  props: Record<string, unknown>,
) {
  const feature = inject<Ref<featureType>>("feature");

  const properties = usePropsAsObjectProperties(props);

  const geometry = computed(() => {
    const parameters = Object.values(properties);
    return new GeometryType(
      ...(parameters as ConstructorParameters<typeof GeometryType>),
    );
  });

  watch(properties, () => {
    feature?.value?.setGeometry(geometry.value);
    feature?.value?.changed();
  });

  watch(
    () => feature,
    () => {
      feature?.value?.setGeometry(geometry.value);
    },
  );

  onMounted(() => {
    feature?.value?.setGeometry(geometry.value);
  });

  onUnmounted(() => {
    feature?.value?.setGeometry(undefined);
  });

  return geometry;
}
