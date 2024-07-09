export default [
  {
    key: "space",
    command: "whichkey.show",
    when: "neovim.mode != 'insert' && !inputFocus",
  },
];
