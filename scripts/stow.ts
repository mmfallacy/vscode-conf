import * as path from "path";
import { Env } from "../env.ts";

const TARGET = Env.VSCODE_PROFILE_DIR;
const BUILD_DIRECTORY = path.join(Deno.cwd(), "build");

try {
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
} catch (err) {
  console.error(err);
}
