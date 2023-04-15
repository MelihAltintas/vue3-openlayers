import { describe, expect, it } from "vitest";
import usePropsAsObjectProperties from "../usePropsAsObjectProperties";
import { isReactive, isRef, reactive, ref } from "vue";

describe("usePropsAsObjectProperties", () => {
  it("should return a reactive object", () => {
    const props = reactive({ foo: "bar" });

    const { properties } = usePropsAsObjectProperties(props);

    expect(isReactive(properties)).toBe(true);
  });

  it("should return options as non-refs", () => {
    const props = reactive({ foo: ref("bar") });

    const { properties } = usePropsAsObjectProperties(props);

    expect(isRef(properties.foo)).toBe(false);
    expect(properties.foo).toBe("bar");
  });

  it("should map 'styles' to 'style'", () => {
    const props = reactive({ styles: "foo" });

    const { properties } = usePropsAsObjectProperties(props);

    expect(properties.style).toBe("foo");
  });
});
