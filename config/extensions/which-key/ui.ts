export const UI = [
  {
    key: "u",
    name: "UI toggles...",
    type: "bindings",
    bindings: [
      {
        key: "a",
        name: "Toggle tool/activity bar visibility",
        type: "command",
        command: "workbench.action.toggleActivityBarVisibility",
      },
      {
        key: "b",
        name: "Toggle side bar visibility",
        type: "command",
        command: "workbench.action.toggleSidebarVisibility",
      },
      {
        key: "j",
        name: "Toggle panel visibility",
        type: "command",
        command: "workbench.action.togglePanel",
      },
      {
        key: "F",
        name: "Toggle full screen",
        type: "command",
        command: "workbench.action.toggleFullScreen",
      },
      {
        key: "s",
        name: "Select theme",
        type: "command",
        command: "workbench.action.selectTheme",
      },
      {
        key: "m",
        name: "Toggle maximized panel",
        type: "command",
        command: "workbench.action.toggleMaximizedPanel",
      },
      {
        key: "T",
        name: "Toggle tab visibility",
        type: "command",
        command: "workbench.action.toggleTabsVisibility",
      },
    ],
  },
];
