import Source, { type Options as SourceOptions } from "ol/source/Source";
import { AssertionError } from "ol";

export type Options = {
  url: string;
  container: HTMLElement;
};

/**
 * @classdesc
 * Layer source for tile data in Svg format.
 * @api
 */
export default class Svg extends Source {
  /**
   * @param {Options} options Svg options.
   */
  constructor(options: Options) {
    super({
      state: "loading",
    });

    if (options.url) {
      const client = new XMLHttpRequest();
      client.addEventListener("load", (event) => {
        const client = event.target;
        // status will be 0 for file:// urls
        // @ts-ignore
        if (!client.status || (client.status >= 200 && client.status < 300)) {
          let response;
          try {
            // @ts-ignore
            response = client.responseText;
          } catch (err) {
            this.handleSvgError();
            return;
          }
          // @ts-ignore
          const svg = client.responseXML.documentElement;
          options.container.ownerDocument.importNode(svg);
          options.container.appendChild(svg);
          this.setState("ready");
        } else {
          this.handleSvgError();
        }
      });
      client.addEventListener("error", this.handleSvgError.bind(this));
      client.open("GET", options.url);
      client.send();
    } else {
      throw new AssertionError(9);
    }
  }

  protected handleSvgError() {
    this.setState("error");
  }
}
