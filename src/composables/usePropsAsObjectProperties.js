import { toRefs, watch, reactive } from "vue";

/**
 * We can't use 'style' as a component prop since it's a reserved property
 * This function will map the special `styles` prop to `style`
 */
function checkAndUpdateStylePropDef(options, key) {
  if (key === "styles") {
    options.style = options[key].value;
  }
}

export default function usePropsAsObjectProperties(props, ignoredKeys = []) {
  let options = toRefs(props);
  Object.keys(options).forEach((key) => {
    checkAndUpdateStylePropDef(options, key);
    options[key] = options[key].value;
  });

  const properties = reactive({
    ...options,
  });

  watch(props, () => {
    options = toRefs(props);
    Object.keys(options).forEach((key) => {
      if (properties[key] != options[key].value && !ignoredKeys.includes(key)) {
        checkAndUpdateStylePropDef(options, key);
        properties[key] = options[key].value;
      }
    });
  });

  return {
    properties,
  };
}
