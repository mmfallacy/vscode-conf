export const Panel = [
  {
    key: "escape",
    command: "runCommands",
    args: {
      commands: [
        "workbench.panel.markers.view.removeView",
        "workbench.panel.output.removeView",
      ],
    },
    when: "panelFocus",
  },
];
