import { toRefs, watch, reactive, type ToRefs, ref, inject } from "vue";

/**
 * We can't use 'style' as a component prop since it's a reserved property
 * This function will map the special `styles` prop to `style`
 */
function checkAndUpdateStylePropDef(
  options: ToRefs<Record<string, unknown>>,
  key: string,
) {
  if (key === "styles") {
    options.style = ref(options[key].value);
  }
}

export default function usePropsAsObjectProperties<
  T extends Record<string, unknown>,
>(props: T, ignoredKeys = [] as string[]) {
  const globalOptions = inject("ol-options");

  let options = toRefs(props);
  Object.keys(options).forEach((key) => {
    checkAndUpdateStylePropDef(options, key);
    // @ts-ignore
    options[key] = options[key].value;
  });

  const properties = reactive({ ...options });

  watch(props, () => {
    options = toRefs(props);
    Object.keys(options).forEach((key) => {
      if (properties[key] != options[key].value && !ignoredKeys.includes(key)) {
        checkAndUpdateStylePropDef(options, key);
        // @ts-ignore
        properties[key] = options[key].value;
      }
    });
  });

  if (globalOptions?.debug) {
    console.debug("[Vue3-OpenLayers Debug] PROPS", {
      in: props,
      out: properties,
    });
  }

  return {
    properties,
  };
}
