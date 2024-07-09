import * as path from "path";

import { Exclusions } from "./exclusions.ts";

const Files: Record<string, unknown> = {
  "files.exclude": Exclusions,
  "files.trimTrailingWhitespace": true,
};

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

for await (const dirEntry of Deno.readDir(__dirname)) {
  const { isFile, name } = dirEntry;
  if (!isFile) continue;
  if (name === "mod.ts") continue;
  if (!/\[\w+\]\.ts/.test(name)) continue;

  const filename = path.basename(name, ".ts");
  const module = await import(new URL(name, import.meta.url).toString());

  Files[filename] = module.default;
}
export { Files };
