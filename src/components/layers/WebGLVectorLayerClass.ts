import { Layer } from "ol/layer";
import WebGLVectorLayerRenderer from "ol/renderer/webgl/VectorLayer";
import type { LayersCommonProps } from "./LayersCommonProps";
import type { WebGLStyle } from "ol/style/webgl";

export type WebGLVectorLayerOptions = LayersCommonProps & {
  styles?: WebGLStyle;
};

export class WebGLVectorLayer extends Layer {
  static options: WebGLVectorLayerOptions = {};

  constructor(opts: WebGLVectorLayerOptions) {
    WebGLVectorLayer.options = opts;
    super(opts);
  }
  createRenderer(): WebGLVectorLayerRenderer {
    return new WebGLVectorLayerRenderer(this, {
      className: this.getClassName(),
      style: this.getProperties().style,
    });
  }
}
