import { Packages } from "../config/extensions/mod.ts";
import { Env } from "../env.ts";

const CODE = Env.VSCODE_BINARY;
const PROFILE = Env.VSCODE_PROFILE_TARGET;

let numInstalled = Packages.length;

for (const pkg of Packages) {
  const cmd = new Deno.Command("cmd", {
    args: ["/c", CODE, `--profile=${PROFILE}`, "--install-extension", pkg],
  });
  const { code, stderr, stdout } = await cmd.output();

  console.log(new TextDecoder().decode(stdout));

  if (code !== 0)
    console.error(
      `Exited ${code} on package ${pkg}. ${new TextDecoder().decode(stderr)}`
    );
  else numInstalled -= 1;
}

if (numInstalled > 0)
  console.warn(`${numInstalled} have not been successfully installed.`);
