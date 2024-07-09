export const Open = [
  {
    key: "o",
    name: "Open...",
    type: "bindings",
    bindings: [
      {
        key: "d",
        name: "Directory",
        type: "command",
        command: "workbench.action.files.openFolder",
      },
      {
        key: "r",
        name: "Recent",
        type: "command",
        command: "workbench.action.openRecent",
      },
      {
        key: "f",
        name: "File",
        type: "command",
        command: "workbench.action.files.openFile",
      },
    ],
  },
];
