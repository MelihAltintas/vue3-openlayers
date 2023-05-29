import { provide, computed, inject } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default function useAnimation(AnimationType, props) {
  const map = inject("map");
  const vectorLayer = inject("vectorLayer");

  const { properties } = usePropsAsObjectProperties(props);

  const animation = computed(() => {
    const anim = new AnimationType({
      ...properties,
    });

    return anim;
  });

  provide("animation", animation);

  return {
    map,
    vectorLayer,
    animation,
    properties,
  };
}
