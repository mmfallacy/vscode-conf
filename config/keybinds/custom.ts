//Quick Exit ond Escape or Ctrl+C
const QuickExit = [
  {
    command: "workbench.action.closeActiveEditor",
    when: "inputFocus && !editorTextFocus",
  },
  {
    command: "workbench.action.closeSidebar",
    when: "listFocus",
  },
].flatMap((obj) => [
  { key: "escape", type: "command", ...obj },
  { key: "ctrl+c", type: "command", ...obj },
]);

export const Custom = [
  {
    key: "space",
    command: "whichkey.show",
    when: "neovim.mode != 'insert' && !(inputFocus && !editorTextFocus)",
  },
  {
    // Force whichkey.show on ctrl+space
    key: "ctrl+space",
    command: "whichkey.show",
  },
  ...QuickExit,
];
