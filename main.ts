import { APC } from "./config/apc.ts";
import { Font } from "./config/font.ts";
import { Files } from "./config/files/mod.ts";
import { Misc } from "./config/misc.ts";
import { UI } from "./config/ui.ts";

import {
  Config as ExtensionsConfig,
  Packages,
} from "./config/extensions/mod.ts";
import { Keybinds } from "./config/keybinds/mod.ts";

export const Settings = {
  ...APC,
  ...Font,
  ...Files,
  ...Misc,
  ...UI,
  ...ExtensionsConfig,
};

export { Keybinds };

export const Extensions = Packages;
