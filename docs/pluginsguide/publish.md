# Publish extension as NPM package

When creating and publishing an extension for vue3-openlayers, you should follow this instruction.
This assures, the lib can be found easily and that it follows a common plugin naming pattern.

- The package name should be `vue3-openlayers-<plugin>-<feature>`, e. g. `vue3-openlayers-source-foo`
- Please add the keywords `vue3-openlayers` and `openlayers` to your published package

```jsonc [package.json]
{
  "name": "vue3-openlayers-source-foo",
  "keywords": [
    "openlayers",
    "vue3-openlayers",
  ],
  //...
}
```
