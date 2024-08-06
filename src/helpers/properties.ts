// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeProperties<T extends Record<string, any>>(
  existingProperties: T,
  newProperties: Partial<T>,
): T {
  // Iterate over the keys in the new properties object
  for (const key in newProperties) {
    if (Object.prototype.hasOwnProperty.call(newProperties, key)) {
      // Only override if the property in the new object is not undefined
      if (newProperties[key] !== undefined) {
        existingProperties[key] = newProperties[key]!;
      }
    }
  }
  return existingProperties;
}
