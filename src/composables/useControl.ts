import type { Ref } from "vue";
import { inject, onMounted, onUnmounted, watch, computed } from "vue";
import Map from "ol/Map";
import type {
  Attribution,
  FullScreen,
  MousePosition,
  OverviewMap,
  ScaleLine,
} from "ol/control";
import type { Options as AttributionOptions } from "ol/control/Attribution";
import type Control from "ol/control/Control";
import type ContextMenu from "ol-contextmenu";
import type { Options as OlContextmenuOptions } from "ol-contextmenu/dist/types";
import Bar from "ol-ext/control/Bar";
import type { Options as BarOptions } from "ol-ext/control/Bar";
import type Button from "ol-ext/control/Button";
import type { Options as ButtonOptions } from "ol-ext/control/Button";
import type PrintDialog from "ol-ext/control/PrintDialog";
import type { Options as PrintDialogOptions } from "ol-ext/control/PrintDialog";
import type Toggle from "ol-ext/control/Toggle";
import type { Options as ToggleOptions } from "ol-ext/control/Toggle";
import type VideoRecorder from "ol-ext/control/VideoRecorder";
import type { Options as VideoRecorderOptions } from "ol-ext/control/VideoRecorder";
import type LayerSwitcher from "ol-ext/control/LayerSwitcher";
import type { Options as LayerSwitcherOptions } from "ol-ext/control/LayerSwitcher";
import type LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
import type Rotate from "ol/control/Rotate";
import type { Options as RotateOptions } from "ol/control/Rotate";
import type Search from "ol-ext/control/Search";
import type { Options as SearchOptions } from "ol-ext/control/Search";
import type Swipe from "ol-ext/control/Swipe";
import type { Options as SwipeOptions } from "ol-ext/control/Swipe";
import type Zone from "ol-ext/control/MapZone";
import type { Options as MapZoneOptions } from "ol-ext/control/MapZone";
import type Zoom from "ol/control/Zoom";
import type { Options as ZoomOptions } from "ol/control/Zoom";
import type ZoomSlider from "ol/control/ZoomSlider";
import type { Options as ZoomSliderOptions } from "ol/control/ZoomSlider";
import type ZoomToExtent from "ol/control/ZoomToExtent";
import type { Options as ZoomToExtentOptions } from "ol/control/ZoomToExtent";

type ExtentedMap = Map & {
  controls_?: Control[];
};
type InnerControlType = (
  | Attribution
  | ContextMenu
  | Bar
  | Button
  | PrintDialog
  | Toggle
  | VideoRecorder
  | FullScreen
  | LayerSwitcher
  | LayerSwitcherImage
  | MousePosition
  | OverviewMap
  | Rotate
  | Search
  | ScaleLine
  | Swipe
  | Zone
  | Zoom
  | ZoomSlider
  | ZoomToExtent
) & {
  controls_?: Control[];
};
type InnerControlProperties =
  | AttributionOptions
  | Partial<OlContextmenuOptions>
  | BarOptions
  | ButtonOptions
  | PrintDialogOptions
  | ToggleOptions
  | VideoRecorderOptions
  | LayerSwitcherOptions
  | SearchOptions
  | RotateOptions
  | SwipeOptions
  | MapZoneOptions
  | ZoomOptions
  | ZoomSliderOptions
  | ZoomToExtentOptions;

export default function useControl<T extends InnerControlType>(
  ControlType: new (options?: Record<string, unknown>) => T,
  properties: InnerControlProperties,
  attrs: Record<string, unknown>,
) {
  const map = inject<ExtentedMap>("map");
  const controlBar = inject<Ref<InnerControlType | null> | null>(
    "controlBar",
    null,
  );

  const parent = controlBar !== null ? controlBar?.value : map;

  const control = computed(
    () =>
      new ControlType({
        ...properties,
      }),
  );

  control.value.set("order", attrs.order === undefined ? 0 : attrs.order);

  watch(control, (newVal, oldVal) => {
    if (parent) {
      if (parent instanceof Map) {
        parent.removeControl(oldVal);
        parent.addControl(newVal);
      } else if (parent instanceof Bar) {
        if (parent?.controls_) {
          const index = parent?.controls_.findIndex((a) => a === control.value);
          if (index) {
            parent?.controls_.splice(index, 1);
          }
        }
        parent.addControl(newVal);
      }
      map?.changed();
    }
  });

  onMounted(() => {
    if (parent && (parent instanceof Map || parent instanceof Bar)) {
      parent.addControl(control.value);
    }

    if (parent?.controls_ !== undefined) {
      const sortedControls = [...parent.controls_];
      sortedControls.sort(
        (a: Control, b: Control) => a.get("order") - b.get("order"),
      );

      parent.controls_ = [];

      if (parent && (parent instanceof Map || parent instanceof Bar)) {
        sortedControls.forEach((c) => {
          parent.addControl(c);
        });
      }

      parent.changed();
    }

    map?.changed();
  });

  onUnmounted(() => {
    if (parent && parent instanceof Map) {
      parent
        ?.getControls()
        .getArray()
        .forEach((c) => {
          if (c instanceof ControlType) {
            parent.removeControl(c);
          }
        });
    } else {
      // ol-ext controls
      if (parent?.controls_) {
        const index = parent?.controls_.findIndex((a) => a === control.value);
        if (index) {
          parent?.controls_.splice(index, 1);
        }
      }
    }
    control.value.dispose();
    map?.changed();
  });

  return {
    map,
    control,
  };
}
