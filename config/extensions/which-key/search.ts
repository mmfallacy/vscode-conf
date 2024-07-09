export const Search = [
  {
    key: "s",
    name: "Search...",
    type: "bindings",
    bindings: [
      {
        key: "f",
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
    ],
  },
  {
    key: "f",
    name: "Find & Replace...",
    type: "bindings",
    bindings: [
      {
        key: "f",
        name: "File",
        type: "command",
        command: "editor.action.startFindReplaceAction",
      },
      {
        key: "s",
        name: "Symbol",
        type: "command",
        command: "editor.action.rename",
        when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
      },
      {
        key: "p",
        name: "Project",
        type: "command",
        command: "workbench.action.replaceInFiles",
      },
    ],
  },
];
