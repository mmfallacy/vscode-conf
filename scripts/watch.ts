import { build } from "./build.ts";
import { inject } from "./inject.ts";

export async function watch() {
  await build();
  await inject();
}

if (import.meta.main) {
  watch().catch(console.error);
}
