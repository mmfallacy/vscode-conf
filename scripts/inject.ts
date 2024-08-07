import * as path from "path";
import { Env } from "../env.ts";
import { Database } from "sqlite3";
import { assert } from "assert";

const STATE_DB_LOC = path.join(
  Env.VSCODE_PROFILE_DIR,
  "globalStorage",
  "state.vscdb"
);

const globalState = {
  "workbench.sideBar.size": 300,
  __$__isNewStorageMarker: false,
  //   "workbench.panel.alignment": "center",
  "workbench.explorer.views.state.hidden": [
    {
      id: "outline",
      isHidden: true,
    },
    {
      id: "timeline",
      isHidden: false,
    },
  ],
  test: {},
};

// deno-lint-ignore require-await
export async function inject() {
  const db = new Database(STATE_DB_LOC, { create: false });
  const read = db.prepare("SELECT key, value FROM ItemTable WHERE key = ?");

  // Insert new row instead of update as the db specifies key to be unique and replace on conflict.
  //   const write = db.prepare("INSERT INTO ItemTable (key, value) VALUES (?, ?)");

  for (const [key, value] of Object.entries(globalState)) {
    const match = read.get(key) ?? { key, value: "{}" };
    console.log(match);

    // Parse stringified javascript object stored as value
    assert(typeof match.value === "string");

    // if (!KEYS_WITH_STRING_VALUES.includes(key))
    match.value = JSON.parse(match.value);

    if (typeof match.value === "number" || typeof match.value === "string")
      match.value = value;
  }

  console.log(`Successfully injected to Env.VSCODE_PROFILE_DIR`);
}

if (import.meta.main) {
  inject().catch(console.error);
}
