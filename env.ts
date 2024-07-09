import { load } from "dotenv";

const env = await load();

export default {
  VSCODE_PROFILE_DIR: env.VSCODE_PROFILE_DIR,
  VSCODE_PROFILE_TARGET: env.VSCODE_PROFILE_TARGET,
};
