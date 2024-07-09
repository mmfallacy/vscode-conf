import APC from "./config/apc.ts";
import Font from "./config/font.ts";
import Files from "./config/files/mod.ts";
import UI from "./config/ui.ts";

const Settings = {
  ...APC,
  ...Font,
  ...Files,
  ...UI,
};

console.log(Settings);

export default Settings;
