import { mount } from "@vue/test-utils";
import OlFeature from "../OlFeature.vue";
import { describe, expect, it } from "vitest";
import VectorSource from "ol/source/Vector";
import { computed, ref } from "vue";

describe("OlMap.vue", () => {
  const props = ref({ attributions: "test" });
  const vectorSource = computed(() => {
    return new VectorSource(props.value);
  });

  function createComponent() {
    return mount(OlFeature, {
      props: {
        properties: {
          foo: "bar",
        },
      },
      global: {
        provide: {
          "ol-options": { debug: false },
          vectorSource,
        },
      },
    });
  }

  it("passes props to the feature constructor", () => {
    expect(createComponent().vm.feature.getProperties().foo).toBe("bar");
  });
  it("updates feature properties on change", async () => {
    const component = createComponent();
    await component.setProps({ properties: { foo: "baz" } });
    expect(component.vm.feature.getProperties().foo).toBe("baz");
  });
});
