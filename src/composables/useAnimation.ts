import { provide, computed, inject } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type {
  FeatureAnimationOptions,
  FeatureAnimation,
} from "@/composables/AnimationTypes";

export default function useAnimation(
  AnimationType: new () => FeatureAnimation,
  props: Partial<Record<keyof FeatureAnimationOptions, unknown>>
) {
  const map = inject("map");
  const vectorLayer = inject("vectorLayer");

  const { properties } = usePropsAsObjectProperties(props);
  const animation = computed(() => {
    // @ts-ignore
    return new AnimationType(properties);
  });

  provide("animation", animation);

  return {
    map,
    vectorLayer,
    animation,
    properties,
  };
}
