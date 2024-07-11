export const Search = [
  {
    key: "ctrl+enter",
    type: "command",
    command: "editor.action.openLink",
    when: "inSearchEditor",
  },
  {
    key: "ctrl+k",
    type: "command",
    command: "search.action.focusPreviousSearchResult",
    when: "hasSearchResult || inSearchEditor",
  },
  {
    key: "ctrl+j",
    type: "command",
    command: "search.action.focusNextSearchResult",
    when: "hasSearchResult || inSearchEditor",
  },
  {
    key: "ctrl+i",
    type: "command",
    command: "search.action.focusQueryEditorWidget",
    when: "inSearchEditor",
  },
];
