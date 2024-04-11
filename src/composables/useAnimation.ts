import { provide, computed, inject } from "vue";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type {
  FeatureAnimationOptions,
  FeatureAnimation,
} from "@/components/animations/AnimationTypes";

type GenericFeatureAnimationOptions = Partial<
  Record<keyof FeatureAnimationOptions, unknown>
>;

export default function useAnimation(
  AnimationType: new (props: Record<string, unknown>) => FeatureAnimation,
  props: GenericFeatureAnimationOptions,
) {
  const map = inject("map");
  const vectorLayer = inject("vectorLayer");

  const properties = usePropsAsObjectProperties(props);
  const animation = computed(() => new AnimationType(properties));

  provide("animation", animation);

  return {
    map,
    vectorLayer,
    animation,
    properties,
  };
}
