import type { App, Component } from "vue";

/**
 * Converts a PascalCase name to both standard kebab-case and split-abbreviation kebab-case aliases.
 * E.g. OlWMSLayer -> ["ol-wms-layer", "ol-w-m-s-layer"]
 */
export function pascalToKebabWithAbbr(name: string): string[] {
  // Standard kebab-case (OlWMSLayer -> ol-wms-layer)
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
  // Only one alias is needed now, as abbreviations are grouped
  return [kebab];
}

/**
 * Registers a component with all kebab-case and split-abbreviation aliases, and the original name.
 */
export function registerWithAliases(
  app: App,
  name: string,
  component: Component,
) {
  for (const alias of pascalToKebabWithAbbr(name)) {
    app.component(alias, component);
  }
  app.component(name, component);
}
