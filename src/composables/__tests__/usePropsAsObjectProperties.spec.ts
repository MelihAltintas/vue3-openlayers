import { describe, expect, it } from "vitest";
import usePropsAsObjectProperties from "../usePropsAsObjectProperties";
import { defineComponent, isReactive, isRef, reactive, ref, watch } from "vue";
import { flushPromises, mount, shallowMount } from "@vue/test-utils";

describe("usePropsAsObjectProperties", () => {
  it("should return a reactive object", () => {
    const props = reactive({ foo: "bar" });

    const properties = usePropsAsObjectProperties(props);

    expect(isReactive(properties)).toBe(true);
  });

  it("should return options as non-refs", () => {
    const props = reactive({ foo: ref("bar") });

    const properties = usePropsAsObjectProperties(props);

    expect(isRef(properties.foo)).toBe(false);
    expect(properties.foo).toBe("bar");
  });

  it("should map 'styles' to 'style'", () => {
    const props = reactive({ styles: "foo" });

    const properties = usePropsAsObjectProperties(props);

    expect(properties.style).toBe("foo");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((properties as any).styles).toBeUndefined();
  });

  it("should update returning properties when input props are changing", () => {
    const props = reactive({ foo: "bar" });
    const properties = usePropsAsObjectProperties(props);

    props.foo = "baz";

    expect(properties.foo).toEqual("baz");
  });

  it("should be possible to watch resulting properties and register changes on the input props", async () => {
    const WrapperComponent = defineComponent({
      props: ["foo", "style"],
      setup(props) {
        const watchFired = ref(false);
        const properties = usePropsAsObjectProperties(props);

        watch(properties, () => {
          watchFired.value = true;
        });
        return {
          watchFired,
        };
      },
    });

    const wrapper = shallowMount(WrapperComponent, {
      propsData: { foo: "initial" },
    });
    await wrapper.setProps({ foo: "updated" });

    expect(wrapper.vm.watchFired).toEqual(true);
  });
});
