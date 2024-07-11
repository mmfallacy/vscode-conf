export const Window = [
  {
    key: "w",
    name: "Window...",
    type: "bindings",
    bindings: [
      {
        key: "w",
        name: "Focus previous editor group",
        type: "command",
        command: "workbench.action.focusPreviousGroup",
      },
      {
        key: "h",
        name: "Move editor group left",
        type: "command",
        command: "workbench.action.moveActiveEditorGroupLeft",
      },
      {
        key: "j",
        name: "Move editor group down",
        type: "command",
        command: "workbench.action.moveActiveEditorGroupDown",
      },
      {
        key: "k",
        name: "Move editor group up",
        type: "command",
        command: "workbench.action.moveActiveEditorGroupUp",
      },
      {
        key: "l",
        name: "Move editor group right",
        type: "command",
        command: "workbench.action.moveActiveEditorGroupRight",
      },
      {
        key: "m",
        name: "Maximize editor group",
        type: "command",
        command: "workbench.action.minimizeOtherEditors",
      },
      {
        key: "M",
        name: "Maximize editor group and hide side bar",
        type: "command",
        command: "workbench.action.maximizeEditor",
      },
      {
        key: "r",
        name: "Resize active editor group",
        type: "command",
        command: "whichkey.showTransient",
        args: {
          title: "Resize active editor group",
          bindings: [
            {
              key: "h",
              name: "Decrease width",
              command: "workbench.action.decreaseViewWidth",
            },
            {
              key: "j",
              name: "Increase height",
              command: "workbench.action.increaseViewHeight",
            },
            {
              key: "k",
              name: "Decrease height",
              command: "workbench.action.decreaseViewHeight",
            },
            {
              key: "l",
              name: "Increase width",
              command: "workbench.action.increaseViewWidth",
            },
          ],
        },
      },
      {
        key: "=",
        name: "Reset editor group sizes",
        type: "command",
        command: "workbench.action.evenEditorWidths",
      },
      {
        key: "z",
        name: "Combine all editors",
        type: "command",
        command: "workbench.action.joinAllGroups",
      },
      {
        key: "d",
        name: "Close editor group",
        type: "command",
        command: "workbench.action.closeEditorsInGroup",
      },
      {
        key: "x",
        name: "Close all editor groups",
        type: "command",
        command: "workbench.action.closeAllGroups",
      },
    ],
  },
];
