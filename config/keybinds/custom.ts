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
];
