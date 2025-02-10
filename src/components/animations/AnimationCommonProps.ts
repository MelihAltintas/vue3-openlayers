import { easeOut } from "ol/easing";
import { type Options } from "ol-ext/featureanimation/FeatureAnimation";
import type { KeysMatching } from "@/types";

export const animationCommonDefaultProps = {
  duration: 1000,
  revers: false,
  repeat: 0,
  easing: easeOut,
};

export function useDefaults<T extends Options>(
  overrides?: T,
): Omit<T, KeysMatching<T, object>> {
  return { ...animationCommonDefaultProps, ...overrides } as T;
}
