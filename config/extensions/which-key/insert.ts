export const Insert = [
  {
    key: "i",
    name: "Insert...",
    type: "bindings",
    bindings: [
      {
        key: "j",
        name: "Insert line below",
        type: "command",
        command: "editor.action.insertLineAfter",
      },
      {
        key: "k",
        name: "Insert line above",
        type: "command",
        command: "editor.action.insertLineBefore",
      },
      {
        key: "s",
        name: "Insert snippet",
        type: "command",
        command: "editor.action.insertSnippet",
      },
    ],
  },
];
