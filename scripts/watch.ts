import { build } from "./build.ts";
import { copy } from "./copy.ts";

export async function watch() {
  await build();
  await copy();
}

if (import.meta.main) {
  watch().catch(console.error);
}
