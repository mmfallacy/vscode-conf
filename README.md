# VSCode Configuration Builder
This repo contains the source for my VSCode configuration builder based on
[ixahmedxi's Gists](https://gist.github.com/ixahmedxi). 
Since `settings.json` solely holds every configuration entry for VSCode, 
it becomes too large to maintain. This repository aims to separate `settings.json`
entries into separate `.ts` files for modularity and maintainability. 
It also chops `keybindings.json` into a few files. 


The repo currently splits VSCode JSON configurations into a few categories
- **Extension specific configurations** `config/extensions/*.ts`. By default, configurations for the following are included:
    - [`vscode-neovim`](https://github.com/vscode-neovim/vscode-neovim) `config/extensions/neovim.ts`
    - [`which-key`]() `config/extensions/which-key/*.ts`
- **File type specific configurations**`config/files/[*].ts`
- **Keybindings** `config/keybinds/*.ts`
- [**APC**](https://github.com/drcika/apc-extension) **UI customizations** `config/apc.ts`
- **Fonts** `config/font.ts`
- **Base UI customizations** `config/ui.ts`
- **Miscellaneous entries** `config/misc.ts`

# Environment Variables
| Key | Description |
| --- | ----------- |
| VSCODE_PROFILE_DIR | Which VSCode Profile directory will be injected/stowed |
| VSCODE_PROFILE_TARGET | Which VSCode Profile will be used to install the extensions |
| VSCODE_BINARY | What binary (`code-insiders`/`code`) will be used to install the extensions |

## Scripts
### `deno task build`
This Deno task merges the separate setting and keybind entries to form `settings.json` and `keybindings.json`.

### `deno task copy`
This Deno task copies the built `settings.json` and `keybindings.json` to the specified `VSCODE_PROFILE_DIR` directory

### `deno task install-ext`
This Deno task uses the `VSCODE_BINARY` executable to install the exported package list in `config/extensions/mod.ts`.

### `deno task stow`
Similar to `deno task copy`, this places the built `settings.json` and `keybindings.json` to `VSCODE_PROFILE_DIR` directory but as a symlink
> *Requires elevated shell permissions in Windows.*
