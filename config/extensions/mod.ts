import { Neovim } from "./neovim.ts";
import { WhichKey } from "./which-key/mod.ts";

export const Packages = ["VSpaceCode.whichkey", "asvetliakov.vscode-neovim"];

export const Config = {
  ...WhichKey,
  ...Neovim,
};
