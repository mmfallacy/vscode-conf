export const Misc = [
  {
    key: "w",
    name: "Save file",
    type: "command",
    command: "workbench.action.files.save",
  },
  {
    key: "q",
    name: "Close file",
    type: "command",
    command: "workbench.action.closeActiveEditor",
  },
  {
    key: ";",
    name: "commands",
    type: "command",
    command: "workbench.action.showCommands",
  },
  {
    key: "?",
    name: "View All References",
    type: "command",
    command: "references-view.find",
    when: "editorHasReferenceProvider",
  },
  {
    key: "M",
    name: "Minimap",
    type: "command",
    command: "editor.action.toggleMinimap",
  },
  {
    key: "z",
    name: "Toggle zen mode",
    type: "command",
    command: "workbench.action.toggleZenMode",
  },
  {
    key: "t",
    name: "Toggle Terminal",
    type: "command",
    command: "workbench.action.terminal.toggleTerminal",
  },
];
