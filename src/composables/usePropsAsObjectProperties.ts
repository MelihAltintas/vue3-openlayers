import {
  inject,
  reactive,
  type UnwrapNestedRefs,
  toRefs,
  getCurrentInstance,
} from "vue";
import type { Vue3OpenlayersGlobalOptions } from "@/types";

type OlClassOptions<T> = T extends { styles: infer S }
  ? { style: S } & Omit<T, "styles">
  : T;

/**
 * We can't use 'style' as a component prop since it's a reserved property
 * This function will map the special `styles` prop to `style`
 */
function checkAndUpdateStylePropDef<T extends Record<string, unknown>>(
  options: T,
) {
  if ("styles" in options) {
    const { styles, ...rest } = toRefs(reactive(options));
    return { style: styles, ...rest } as OlClassOptions<T>;
  } else {
    return options as OlClassOptions<T>;
  }
}

export default function usePropsAsObjectProperties<
  T extends Record<string, unknown>,
>(props: T): UnwrapNestedRefs<OlClassOptions<T>> {
  const instance = getCurrentInstance();
  let globalOptions: Vue3OpenlayersGlobalOptions = {
    debug: false,
  };
  if (instance) {
    globalOptions = inject("ol-options");
  }

  const revisedProps = checkAndUpdateStylePropDef<T>(props);

  const properties = reactive(revisedProps);

  if (globalOptions?.debug) {
    console.debug("[Vue3-OpenLayers Debug] PROPS", {
      in: props,
      out: properties,
    });
  }

  return properties;
}
