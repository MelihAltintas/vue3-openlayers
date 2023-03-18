import { toRefs, watch, reactive } from 'vue'

export default function usePropsAsObjectProperties<
  T extends Record<string, unknown>,
>(
  props: T,
  ignoredKeys = [] as string[],
) {
  let options = toRefs(props)

  const tempOpts:T = {} as T
  Object.keys(options).forEach(key => {
    // @ts-ignore
    tempOpts[key] = options[key].value
  })

  const properties = reactive({ ...tempOpts })

  watch(props, () => {
    options = toRefs(props)

    Object.keys(options).forEach(key => {
      if (properties[key] !== options[key].value && !ignoredKeys.includes(key)) {
        // @ts-ignore
        properties[key] = options[key].value
      }
    })
  })

  return {
    properties,
  }
}
