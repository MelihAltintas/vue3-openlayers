"use strict";

import { readFileSync, writeFileSync } from "fs";
import getPkg from "get-pkg";

// eslint-disable-next-line no-undef
const [, , ...filepaths] = process.argv;

const packageJson = readFileSync("./package.json");
const config = JSON.parse(packageJson);

Promise.all(
  Object.entries(config.peerDependencies).map(async ([depName, depVersion]) => {
    const packageJson = await getPkg(depName);
    console.log(packageJson);
    return `- **[${depName}](${packageJson.homepage})**: \`${depVersion}\``;
  }),
).then((result) => {
  filepaths.forEach((file) => {
    const contents = readFileSync(file, "utf-8");
    const replaced = contents.replace(
      /<!--.* START -->.*.*<!--.* END -->/gs,
      [
        "<!-- auto-generated-peer-dependency-requirements START -->\n",
        ...result,
        "\n<!-- auto-generated-peer-dependency-requirements END -->",
      ].join("\n"),
    );
    writeFileSync(file, replaced, "utf-8");
  });
});
