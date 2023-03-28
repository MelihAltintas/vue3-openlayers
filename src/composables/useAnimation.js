import { provide, computed } from "vue";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import Animation from "@/components/animations/FeatureAnimation";

export default function useAnimation(AnimationType, props) {
  const { map, vectorLayer } = Animation.setup();

  const { properties } = usePropsAsObjectProperties(props);

  const animation = computed(() => {
    let anim = new AnimationType({
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
