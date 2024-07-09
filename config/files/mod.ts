import Exclusions from "./exclusions.ts";
import Markdown from "./markdown.ts";

const Files: Record<string, unknown> = {
  "files.exclude": Exclusions,
  "files.trimTrailingWhitespace": true,
  "[markdown]": Markdown,
};

export default Files;
