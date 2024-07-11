import { Custom } from "./custom.ts";
import { Neovim } from "./neovim.ts";
import { Search } from "./search.ts";

export const Keybinds = [...Neovim, ...Custom, ...Search];
