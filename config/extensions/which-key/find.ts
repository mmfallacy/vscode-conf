export const Find = [
  {
    key: "f",
    name: "Find...",
    type: "bindings",
    bindings: [
      {
        key: "p",
        name: "Files",
        type: "command",
        command: "workbench.action.quickOpen",
      },
      {
        key: "t",
        name: "Text",
        type: "command",
        command: "workbench.action.findInFiles",
      },
      {
        key: "b",
        name: "Show all buffers/editors",
        type: "command",
        command: "workbench.action.showAllEditors",
      },
      {
        key: "r",
        name: "Rename",
        type: "command",
        command: "editor.action.rename",
        when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
      },
    ],
  },
];
