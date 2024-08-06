import { describe, expect, it } from "vitest";
import { mergeProperties } from "../properties";

describe("mergeProperties", () => {
  it("should merge properties of two objects", () => {
    const obj1 = {
      foo: "hello",
      bar: "world",
      baz: undefined,
    };
    const obj2 = {
      foo: undefined,
      bar: "world2",
    };
    expect(mergeProperties(obj1, obj2)).toEqual({
      foo: "hello",
      bar: "world2",
      baz: undefined,
    });
  });
});
