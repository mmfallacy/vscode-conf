import * as path from "path";

const INIT_PATH = path.fromFileUrl(new URL("init.lua", import.meta.url));

function attachInitVimPath() {
  switch (Deno.build.os) {
    case "windows":
      return { win32: INIT_PATH };
    case "linux":
      return { linux: INIT_PATH };
    case "darwin":
      return { darwin: INIT_PATH };
  }
}

export const VSCodeNeovim = {
  // Specify where the neovim executable is located
  // "vscode-neovim.neovimExecutablePaths.win32": "C:\Program Files\Neovim\bin",
  // "vscode-neovim.neovimExecutablePaths.linux": "/usr/local/bin/nvim",
  // "vscode-neovim.neovimExecutablePaths.darwin": "/usr/local/bin/nvim",
  // Set VSCode-Neovim
  "extensions.experimental.affinity": {
    "asvetliakov.vscode-neovim": 1,
  },
  "vscode-neovim.neovimInitVimPaths": {
    ...attachInitVimPath(),
  },
};
