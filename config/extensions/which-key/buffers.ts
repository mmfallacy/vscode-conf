export const Buffers = [
  {
    key: "b",
    name: "Buffers/Editors...",
    type: "bindings",
    bindings: [
      {
        key: "b",
        name: "Show all buffers/editors",
        type: "command",
        command: "workbench.action.showAllEditors",
      },
      {
        key: "d",
        name: "Close active editor",
        type: "command",
        command: "workbench.action.closeActiveEditor",
      },
      {
        key: "h",
        name: "Move editor into left group",
        type: "command",
        command: "workbench.action.moveEditorToLeftGroup",
      },
      {
        key: "j",
        name: "Move editor into below group",
        type: "command",
        command: "workbench.action.moveEditorToBelowGroup",
      },
      {
        key: "k",
        name: "Move editor into above group",
        type: "command",
        command: "workbench.action.moveEditorToAboveGroup",
      },
      {
        key: "l",
        name: "Move editor into right group",
        type: "command",
        command: "workbench.action.moveEditorToRightGroup",
      },
      {
        key: "m",
        name: "Close other editors",
        type: "command",
        command: "workbench.action.closeOtherEditors",
      },

      {
        key: "N",
        name: "New untitled editor",
        type: "command",
        command: "workbench.action.files.newUntitledFile",
      },
      {
        key: "u",
        name: "Reopen closed editor",
        type: "command",
        command: "workbench.action.reopenClosedEditor",
      },
      {
        key: "y",
        name: "Copy buffer to clipboard",
        type: "commands",
        commands: [
          "editor.action.selectAll",
          "editor.action.clipboardCopyAction",
          "cancelSelection",
        ],
      },
    ],
  },
  {
    key: "h",
    name: "Split Horizontal",
    type: "command",
    command: "workbench.action.splitEditorDown",
  },
  {
    key: "v",
    name: "Split Vertical",
    type: "command",
    command: "workbench.action.splitEditor",
  },
  {
    key: "]",
    name: "Next editor",
    type: "command",
    command: "workbench.action.nextEditor",
  },
  {
    key: "[",
    name: "Previous editor",
    type: "command",
    command: "workbench.action.previousEditor",
  },
];
