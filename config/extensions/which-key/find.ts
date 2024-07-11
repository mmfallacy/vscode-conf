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
        key: "2",
        name: "Rename",
        type: "command",
        command: "editor.action.rename",
        when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
      },
      {
        key: "R",
        name: "References",
        type: "command",
        command: "references-view.findReferences",
        when: "editorHasReferenceProvider",
      },
      {
        key: "r",
        name: "Live Grep",
        type: "commands",
        command: "search.action.openNewEditor",
        args: {
          regexp: true,
          useIgnores: true,
          caseSensitive: true,
        },
      },
    ],
  },
];
