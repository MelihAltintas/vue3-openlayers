<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import { type Ref, inject, watch, onMounted, onUnmounted, ref } from "vue";
import Fill from "ol/style/Fill";
import type CircleStyle from "ol/style/Circle";
import type Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

// Define the type for gradient color stops
type GradientColorStop = [number, string];

// Define the type for linear gradients
export type LinearGradient = {
  type: "linear";
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  colorStops: GradientColorStop[];
};

// Define the type for radial gradients
export type RadialGradient = {
  type: "radial";
  x0: number;
  y0: number;
  r0: number;
  x1: number;
  y1: number;
  r1: number;
  colorStops: GradientColorStop[];
};

// Define the type for conic gradients
export type ConicGradient = {
  type: "conic";
  x: number;
  y: number;
  startAngle: number;
  colorStops: GradientColorStop[];
};

// Define a union type for all gradient types
export type Gradient = LinearGradient | RadialGradient | ConicGradient;

// Define the props type for the component
const props = defineProps<{
  color?: string;
  gradient?: Gradient;
}>();

// Inject possible nullable Ref objects from the parent component
const style = inject<Ref<Style | null>>("style", ref(null));
const circle = inject<Ref<CircleStyle | null>>("circle", ref(null));
const styledObj = inject<Ref<Style | null>>("styledObj", ref(null));

// Use a custom composable to convert props into an object
const properties = usePropsAsObjectProperties(props);

// Function to create a gradient fill
const createGradientFill = (
  gradient?: Gradient,
  width: number = 256,
  height: number = 256,
): Fill => {
  const gradientCanvas = document.createElement("canvas");
  const ctx = gradientCanvas.getContext("2d");

  if (!ctx) throw new Error("Unable to get canvas context");

  gradientCanvas.width = width;
  gradientCanvas.height = height;

  let grad: CanvasGradient;

  // Create the corresponding CanvasGradient object based on the gradient type
  if (gradient) {
    switch (gradient.type) {
      case "linear":
        grad = ctx.createLinearGradient(
          gradient.x0,
          gradient.y0,
          gradient.x1,
          gradient.y1,
        );
        break;
      case "radial":
        grad = ctx.createRadialGradient(
          gradient.x0,
          gradient.y0,
          gradient.r0,
          gradient.x1,
          gradient.y1,
          gradient.r1,
        );
        break;
      case "conic":
        grad = ctx.createConicGradient(
          gradient.x,
          gradient.y,
          gradient.startAngle,
        );
        break;
      default:
        throw new Error("Unsupported gradient type");
    }

    // Add color stops to the gradient
    gradient.colorStops.forEach(([offset, gradientColor]) => {
      grad.addColorStop(offset, gradientColor);
    });

    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = properties.color ?? "transparent";
  }

  ctx.fillRect(0, 0, width, height);

  const dataURL = gradientCanvas.toDataURL();
  return new Fill({ color: { src: dataURL } });
};

const gradFill = properties.gradient
  ? createGradientFill(properties.gradient)
  : null;

// Function to apply fill style to a Style object
const applyFillToStyle = () => {
  if (style.value) {
    const fill = gradFill
      ? gradFill
      : new Fill({ color: properties.color || "transparent" });

    style.value.setFill(fill);
  }
};

// Function to apply fill style to a CircleStyle object
const applyFillToCircle = (color?: string) => {
  if (circle.value) {
    // @ts-ignore
    circle?.value?.getFill().setColor(color || null);
    circle?.value?.setRadius(circle?.value.getRadius()); // force render
    try {
      // @ts-ignore
      styledObj?.value?.changed();
    } catch (error) {
      // @ts-ignore
      styledObj?.value.changed();
    }
  }
};

// Conditional style handling
if (style.value && !circle.value) {
  // If a Style object exists but not a CircleStyle object, apply style to the Style
  applyFillToStyle();

  // Watch for changes in properties and reapply style
  watch(properties, applyFillToStyle, { immediate: true });
  watch(
    style,
    (newStyle) => {
      if (newStyle) applyFillToStyle();
    },
    { immediate: true },
  );

  onMounted(applyFillToStyle);
  onUnmounted(() => {
    style.value?.setFill(new Fill());
  });
} else if (circle.value) {
  // If a CircleStyle object exists, apply style to the CircleStyle
  applyFillToCircle(properties.color);

  // Watch for changes in properties and the CircleStyle object and reapply style
  watch(
    properties,
    () => {
      if (circle.value) applyFillToCircle(properties.color);
    },
    { immediate: true },
  );

  watch(
    circle,
    (newCircle) => {
      if (newCircle) applyFillToCircle(properties.color);
    },
    { immediate: true },
  );
}
</script>
