export const Terminal = [
  {
    key: "t",
    name: "Terminal...",
    type: "bindings",
    bindings: [
      {
        key: "t",
        name: "Toggle Terminal",
        type: "command",
        command: "workbench.action.togglePanel",
      },
      {
        key: "T",
        name: "Focus Terminal",
        type: "command",
        command: "workbench.action.terminal.toggleTerminal",
        when: "!terminalFocus",
      },
    ],
  },
];
