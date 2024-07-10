import { load } from "dotenv";

const env = await load();

export const Env = {
  VSCODE_PROFILE_DIR: env.VSCODE_PROFILE_DIR,
  VSCODE_PROFILE_TARGET: env.VSCODE_PROFILE_TARGET,
  VSCODE_BINARY: env.VSCODE_BINARY,
};
