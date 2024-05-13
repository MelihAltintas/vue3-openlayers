"use strict";

import { readFileSync, writeFileSync } from "fs";
import { npmKeyword } from "npm-keyword";

// eslint-disable-next-line no-undef
const file = process.argv[2];

npmKeyword("vue3-openlayers-extension").then((results) => {
  const list = results.map((result) => {
    return `- **[${result.name}](https://www.npmjs.com/package/${result.name})**: \`${result.description}\``;
  });
  if (!list.length) {
    list.push(
      "**Sorry, no plugins published until now. [Check out how to publish your extension](./publish.md).**",
    );
  }
  console.log(list);

  const contents = readFileSync(file, "utf-8");
  const replaced = contents.replace(
    /<!--.* START -->.*.*<!--.* END -->/gs,
    [
      "<!-- auto-generated-peer-dependency-requirements START -->\n",
      ...list,
      "\n<!-- auto-generated-peer-dependency-requirements END -->",
    ].join("\n"),
  );
  writeFileSync(file, replaced, "utf-8");
});
