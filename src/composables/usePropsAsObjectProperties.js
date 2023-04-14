import { toRefs, watch, reactive } from "vue";

/**
 * We can't use 'style' as a component prop since it's a reserved property
 * This function will map the special `styles` prop to `style`
 */
function getRevisedProps(props) {
  const revisedProps = { ...props };
  delete revisedProps.styles;
  if (props.styles) {
    props.style = props.styles;
  }
  return revisedProps;
}

export default function usePropsAsObjectProperties(props, ignoredKeys = []) {
  const revisedProps = getRevisedProps(props);

  let options = toRefs(revisedProps);
  Object.keys(options).forEach((key) => {
    options[key] = options[key].value;
  });

  const properties = reactive({
    ...options,
  });

  watch(props, (newVal) => {
    options = toRefs(getRevisedProps(newVal));
    Object.keys(options).forEach((key) => {
      if (properties[key] != options[key].value && !ignoredKeys.includes(key)) {
        properties[key] = options[key].value;
      }
    });
  });

  return {
    properties,
  };
}
