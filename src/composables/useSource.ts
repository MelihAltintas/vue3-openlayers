import { onUnmounted, type Ref, shallowRef, watch } from "vue";
import { type Cluster, Source } from "ol/source";
import usePropsAsObjectProperties from "./usePropsAsObjectProperties";
import type { Layer } from "ol/layer";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";
import projectionFromProperties from "@/helpers/projection";
import type { ProjectionLike } from "ol/proj";

/**
 * Create a Source and watch for source, prop and layer changes
 * @param SourceClass The Class of the source which should be created
 * @param layer A `ref` carrying the parent components layer the layer should be applied to
 * @param props The properties which should be passed to the SourceClass
 * @param eventsToHandle The event names list for events that should be passed from the source through the component
 */
export default function useSource<T extends Source>(
  // eslint-disable-next-line
  SourceClass: new (...args: any[]) => T,
  layer: Ref<Layer> | Ref<Cluster> | null | undefined,
  props: ConstructorParameters<typeof SourceClass>[0],
  eventsToHandle: string[] = [],
  // eslint-disable-next-line
  sourceUpdateActions?: (source: T) => void,
) {
  function getProperties() {
    return usePropsAsObjectProperties({
      ...props,
      ...(props.projection
        ? {
            projection: projectionFromProperties(
              props.projection as ProjectionLike,
            ),
          }
        : {}),
    });
  }

  const source = shallowRef(new SourceClass(getProperties()));
  updateSource();

  function updateSource() {
    layer?.value?.setSource(null);
    const properties = getProperties();
    source.value.setProperties(properties);
    for (const key in properties) {
      const keyInObj = key as keyof typeof properties;
      if (properties[keyInObj] !== undefined) {
        source.value.set(key, properties[keyInObj]);
      }
    }
    if (sourceUpdateActions) {
      sourceUpdateActions(source.value);
    }
    layer?.value?.setSource(source.value);
    useOpenLayersEvents(source, eventsToHandle);
    return source;
  }

  function removeSource() {
    layer?.value?.setSource(null);
  }

  onUnmounted(removeSource);

  watch(source, updateSource);

  watch(() => layer, updateSource);

  watch(() => props, updateSource, { deep: true });

  return {
    source,
    updateSource,
    removeSource,
  };
}
