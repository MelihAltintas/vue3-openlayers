import { VueWrapper, mount } from "@vue/test-utils";
import OlFeature from "../OlFeature.vue";
import { beforeAll, describe, expect, it } from "vitest";
import "tests/_setup";
import VectorSource from "ol/source/Vector";
import { computed, ref } from "vue";

describe("OlMap.vue", () => {
  let featureComponent: VueWrapper;
  const props = ref({ attributions: "test" });
  const vectorSource = computed(() => {
    return new VectorSource(props.value);
  });

  beforeAll(() => {
    featureComponent = mount(OlFeature, {
      props: {
        properties: {
          foo: "bar",
        },
      },
      global: {
        provide: {
          "ol-options": { degbug: true },
          vectorSource,
        },
      },
    });
  });
  it("passes props to the feature constructor", () => {
    // @ts-ignore
    expect(featureComponent.vm.feature.getProperties().foo).toBe("bar");
  });
  it("updates feature properties on change", async () => {
    await featureComponent.setProps({ properties: { foo: "baz" } });
    // @ts-ignore
    expect(featureComponent.vm.feature.getProperties().foo).toBe("baz");
  });
});
