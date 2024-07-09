import APC from "./config/apc.ts";
import Font from "./config/font.ts";
import Files from "./config/files/mod.ts";
import UI from "./config/ui.ts";

import Custom from "./config/keybinds/custom.ts";
import Neovim from "./config/keybinds/neovim.ts";

export const Settings = {
  ...APC,
  ...Font,
  ...Files,
  ...UI,
};

export const Keybinds = [...Custom, ...Neovim];
