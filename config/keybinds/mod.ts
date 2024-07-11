import { Custom } from "./custom.ts";
import { Neovim } from "./neovim.ts";

export const Keybinds = [...Neovim, ...Custom];
