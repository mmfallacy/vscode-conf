import {
  array,
  boolean,
  InferInput,
  number,
  object,
  optional,
  partial,
  picklist,
} from "@valibot/valibot";

export const ViewletSchema = object({
  id: picklist([
    "workbench.view.explorer",
    "workbench.view.search",
    "workbench.view.debug",
    "workbench.view.scm",
    "workbench.view.remote",
    "workbench.view.extensions",
    "workbench.view.extension.test",
    "workbench.view.extension.references-view",
    "workbench.panel.chatSidebar",
    "workbench.view.sync",
    "workbench.view.editSessions",
    "userDataProfiles",
  ]),
  order: optional(number()),
  pinned: boolean(),
  visible: boolean(),
});
export type Viewlet = InferInput<typeof ViewletSchema>;

const PanelSchema = object({
  id: picklist([
    "workbench.panel.markers",
    "workbench.panel.output",
    "refactorPreview",
    "workbench.panel.testResults",
    "terminal",
    "~remote.forwardedPortsContainer",
    "workbench.panel.repl",
  ]),
  order: optional(number()),
  pinned: boolean(),
  visible: boolean(),
});
export type Panel = InferInput<typeof PanelSchema>;

const ViewTitleHideableSchema = picklist([
  "workbench.output.menu.switchOutput",
  "workbench.output.action.clearOutput",
  "workbench.output.action.toggleAutoScroll",
  "workbench.output.menu.logLevel",
  "workbench.debug.panel.action.clearReplAction",
  "workbench.action.terminal.focus",
  "workbench.action.terminal.new",
  "workbench.action.terminal.split",
  "workbench.action.terminal.kill",
  "workbench.actions.table.workbench.panel.markers.view.viewAsTable",
  "workbench.actions.treeView.workbench.panel.markers.view.collapseAll",
]);
export type ViewTitleHideable = InferInput<typeof ViewTitleHideableSchema>;

const ExplorerHideableSchema = object({
  id: picklist([
    "workbench.explorer.openEditorsView",
    "workbench.explorer.fileView",
    "hexEditor.dataInspectorView",
    "makefile.outline",
    "outline",
    "timeline",
    "npm",
    "denoTasks",
    "commands.tree",
  ]),
  isHidden: boolean(),
});
export type ExplorerHideable = InferInput<typeof ExplorerHideableSchema>;

const SourceControlHideableSchema = object({
  id: picklist(["workbench.scm.repositories", "workbench.scm"]),
  isHidden: boolean(),
});
export type SourceControlHideable = InferInput<
  typeof SourceControlHideableSchema
>;

export const SupportedGlobalStatesSchema = partial(
  object({
    // Numeric values
    "workbench.sideBar.size": number(),
    //   "workbench.auxiliaryBar.size": number(),
    "workbench.panel.size": number(),
    //   "workbench.panel.lastNonMaximizedHeight": number(),
    //   "workbench.panel.lastNonMaximizedWidth": number(),
    // "workbench.grid.size": object({
    //   height: number(),
    //   width: number(),
    // }),
    // String values
    "workbench.panel.alignment": picklist([
      "center",
      "justify",
      "left",
      "right",
    ]),
    "workbench.activityBar.location": picklist([
      "default",
      "top",
      "bottom",
      "hidden",
    ]),

    // Array values
    "workbench.activity.pinnedViewlets2": array(ViewletSchema),
    "workbench.panel.pinnedPanels": array(PanelSchema),
    "menu.hiddenCommands": object({
      ViewTitle: array(ViewTitleHideableSchema),
    }),
    "workbench.explorer.views.state.hidden": array(ExplorerHideableSchema),
    "workbench.scm.views.state.hidden": array(SourceControlHideableSchema),
  })
);
export type SupportedGlobalStates = InferInput<
  typeof SupportedGlobalStatesSchema
>;
