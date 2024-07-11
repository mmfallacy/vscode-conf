import * as path from "path";
import { Env } from "../env.ts";

const TARGET = Env.VSCODE_PROFILE_DIR;
const BUILD_DIRECTORY = path.join(Deno.cwd(), "build");

export async function stow() {
  await Deno.symlink(
    path.join(BUILD_DIRECTORY, "settings.json"),
    path.join(TARGET, "settings.json"),
    { type: "file" }
  );
  await Deno.symlink(
    path.join(BUILD_DIRECTORY, "keybindings.json"),
    path.join(TARGET, "keybindings.json"),
    { type: "file" }
  );

  console.log(`Successfully injected to Env.VSCODE_PROFILE_DIR as a symlink`);
}

if (import.meta.main) {
  stow().catch(console.error);
}
