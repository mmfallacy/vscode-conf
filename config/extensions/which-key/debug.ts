export const Debug = [
  {
    key: "d",
    name: "Debug...",
    type: "bindings",
    bindings: [
      {
        key: "d",
        name: "Start debug",
        type: "command",
        command: "workbench.action.debug.start",
      },
      {
        key: "S",
        name: "Stop debug",
        type: "command",
        command: "workbench.action.debug.stop",
      },
      {
        key: "c",
        name: "Continue debug",
        type: "command",
        command: "workbench.action.debug.continue",
      },
      {
        key: "p",
        name: "Pause debug",
        type: "command",
        command: "workbench.action.debug.pause",
      },
      {
        key: "r",
        name: "Run without debugging",
        type: "command",
        command: "workbench.action.debug.run",
      },
      {
        key: "R",
        name: "Restart ebug",
        type: "command",
        command: "workbench.action.debug.restart",
      },
      {
        key: "i",
        name: "Step into",
        type: "command",
        command: "workbench.action.debug.stepInto",
      },
      {
        key: "s",
        name: "Step over",
        type: "command",
        command: "workbench.action.debug.stepOver",
      },
      {
        key: "o",
        name: "Step out",
        type: "command",
        command: "workbench.action.debug.stepOut",
      },
      {
        key: "b",
        name: "Toggle breakpoint",
        type: "command",
        command: "editor.debug.action.toggleBreakpoint",
      },
      {
        key: "B",
        name: "Toggle inline breakpoint",
        type: "command",
        command: "editor.debug.action.toggleInlineBreakpoint",
      },
      {
        key: "j",
        name: "Jump to cursor",
        type: "command",
        command: "debug.jumpToCursor",
      },
      {
        key: "v",
        name: "REPL",
        type: "command",
        command: "workbench.debug.action.toggleRepl",
      },
      {
        key: "w",
        name: "Focus on watch window",
        type: "command",
        command: "workbench.debug.action.focusWatchView",
      },
      {
        key: "W",
        name: "Add to watch",
        type: "command",
        command: "editor.debug.action.selectionToWatch",
      },
    ],
  },
];
