import { Viewlets } from "./pinned.ts";

export const GlobalState = {
  "workbench.activity.pinnedViewlets2": Viewlets,
  "workbench.explorer.views.state.hidden": [
    {
      id: "outline",
      isHidden: true,
    },
    {
      id: "timeline",
      isHidden: true,
    },
  ],
  "workbench.panel.repl.hidden": [
    {
      id: "workbench.panel.repl.view",
      isHidden: false,
    },
  ],
  "workbench.panel.pinnedPanels": [
    {
      id: "workbench.panel.markers",
      pinned: true,
      visible: false,
      order: 0,
    },
    {
      id: "workbench.panel.output",
      pinned: true,
      visible: false,
      order: 1,
    },
    {
      id: "refactorPreview",
      pinned: true,
      visible: false,
    },
    {
      id: "workbench.panel.testResults",
      pinned: true,
      visible: false,
      order: 3,
    },
    {
      id: "terminal",
      pinned: true,
      visible: false,
      order: 3,
    },
    {
      id: "~remote.forwardedPortsContainer",
      pinned: true,
      visible: false,
      order: 5,
    },
    {
      id: "workbench.panel.repl",
      pinned: true,
      visible: false,
      order: 2,
    },
  ],
  "workbench.panel.alignment": "center",
  "userDataProfiles.state.hidden": [
    {
      id: "workbench.views.profiles.export.preview",
      isHidden: false,
    },
  ],
};
