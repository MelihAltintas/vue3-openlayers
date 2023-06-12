import { easeOut } from "ol/easing";

export type AnimationCommonProps = {
  duration?: number;
  revers?: boolean;
  repeat?: number;
  easing?: (t: number) => number;
};

export const animationCommonDefaultProps = {
  duration: 1000,
  revers: false,
  repeat: 0,
  easing: easeOut,
};
