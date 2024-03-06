import { Layer } from "ol/layer";
import WebGLVectorLayerRenderer from "ol/renderer/webgl/VectorLayer";
import type { LayersCommonProps } from "./LayersCommonProps";

export type WebGLVectorLayerOptions = LayersCommonProps & {
  style?: WebGLStyleDef;
};

export type WebGLStyleDef = {
  symbol: {
    symbolType: string;
    size: number;
    color: string;
    opacity: number;
  };
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
