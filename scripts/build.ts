import * as path from "path";
import { Settings, Keybinds } from "../main.ts";

const BUILD_DIRECTORY = path.join(Deno.cwd(), "build");

export async function build() {
  // Add recursive: true to succeed silently if directory already exists
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

  console.log(`Successfully built settings.json and keybindings.json`);
}

if (import.meta.main) {
  build().catch(console.error);
}
