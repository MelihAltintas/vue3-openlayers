import type { Options } from "ol-ext/featureanimation/FeatureAnimation";
import type Blink from "ol-ext/featureanimation/Blink";
import type { Options as BlinkOptions } from "ol-ext/featureanimation/Blink";
import type Bounce from "ol-ext/featureanimation/Bounce";
import type { Options as BounceOptions } from "ol-ext/featureanimation/Bounce";
import type Drop from "ol-ext/featureanimation/Drop";
import type { Options as DropOptions } from "ol-ext/featureanimation/Drop";
import type Fade from "ol-ext/featureanimation/Fade";
import type { Options as FadeOptions } from "ol-ext/featureanimation/Fade";
import type None from "ol-ext/featureanimation/None";
import type Null from "ol-ext/featureanimation/Null";
import type Path from "ol-ext/featureanimation/Path";
import type { Options as PathOptions } from "ol-ext/featureanimation/Path";
import type Shake from "ol-ext/featureanimation/Shake";
import type { Options as ShakeOptions } from "ol-ext/featureanimation/Shake";
import type Show from "ol-ext/featureanimation/Show";
import type Slide from "ol-ext/featureanimation/Slide";
import type { Options as SlideOptions } from "ol-ext/featureanimation/Slide";
import type Teleport from "ol-ext/featureanimation/Teleport";
import type Throw from "ol-ext/featureanimation/Throw";
import type { Options as ThrowOptions } from "ol-ext/featureanimation/Throw";
import type Zoom from "ol-ext/featureanimation/Zoom";
import type { Options as ZoomOptions } from "ol-ext/featureanimation/Zoom";
import type ZoomOut from "ol-ext/featureanimation/ZoomOut";
import type { Options as ZoomOutOptions } from "ol-ext/featureanimation/ZoomOut";

export type Class = { new (...args: unknown[]): unknown };

export type FeatureAnimation =
  | Blink
  | Bounce
  | Drop
  | Fade
  | None
  | Null
  | Path
  | Shake
  | Show
  | Slide
  | Teleport
  | Throw
  | Zoom
  | ZoomOut;

export type FeatureAnimationOptions =
  | Options
  | BlinkOptions
  | BounceOptions
  | DropOptions
  | FadeOptions
  | PathOptions
  | ShakeOptions
  | SlideOptions
  | ThrowOptions
  | ZoomOptions
  | ZoomOutOptions;
