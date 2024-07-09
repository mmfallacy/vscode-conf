import * as path from "path";
import { Settings, Keybinds } from "../main.ts";

const BUILD_DIRECTORY = path.join(Deno.cwd(), "build");

await Deno.mkdir(BUILD_DIRECTORY, { recursive: true });

await Deno.writeTextFile(
  path.join(BUILD_DIRECTORY, "settings.json"),
  JSON.stringify(Settings),
  { create: true }
);

await Deno.writeTextFile(
  path.join(BUILD_DIRECTORY, "keybindings.json"),
  JSON.stringify(Keybinds),
  { create: true }
);
