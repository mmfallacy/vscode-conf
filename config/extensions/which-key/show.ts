export const Show = [
  {
    key: "S",
    name: "Show...",
    type: "bindings",
    bindings: [
      {
        key: "e",
        name: "Show explorer",
        type: "command",
        command: "workbench.view.explorer",
      },
      {
        key: "s",
        name: "Show search",
        type: "command",
        command: "workbench.view.search",
      },
      {
        key: "g",
        name: "Show source control",
        type: "command",
        command: "workbench.view.scm",
      },
      {
        key: "t",
        name: "Show test",
        type: "command",
        command: "workbench.view.extension.test",
      },
      {
        key: "r",
        name: "Show remote explorer",
        type: "command",
        command: "workbench.view.remote",
      },
      {
        key: "x",
        name: "Show extensions",
        type: "command",
        command: "workbench.view.extensions",
      },
      {
        key: "p",
        name: "Show problem",
        type: "command",
        command: "workbench.actions.view.problems",
      },
      {
        key: "o",
        name: "Show output",
        type: "command",
        command: "workbench.action.output.toggleOutput",
      },
      {
        key: "d",
        name: "Show debug console",
        type: "command",
        command: "workbench.debug.action.toggleRepl",
      },
    ],
  },
  {
    key: "e",
    name: "Toggle Explorer",
    type: "command",
    command: "workbench.action.toggleSidebarVisibility",
  },
  {
    key: "x",
    name: "Extensions",
    type: "command",
    command: "workbench.view.extensions",
  },
];
