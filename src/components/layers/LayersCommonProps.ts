import type { KeysMatching, ObjectToFactory } from "@/types";
import type { Options } from "ol/layer/Layer";
import type { Source } from "ol/source";
import type VectorSource from "ol/source/Vector";

export type LayersCommonProps<T extends Source = VectorSource> = Partial<
  Options<T>
>;

export const layersCommonDefaultProps: Options<Source> = {
  className: "ol-layer",
  opacity: 1,
  visible: true,
  properties: () => ({}),
};

export function useDefaults<
  T extends LayersCommonProps<S>,
  S extends Source = VectorSource,
>(overrides?: ObjectToFactory<T>): Omit<T, KeysMatching<T, object>> {
  return { ...layersCommonDefaultProps, ...overrides } as T;
}
