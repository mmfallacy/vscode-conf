const APC: Record<string, unknown> = {};

APC.activityBar = {
  position: "bottom",
  hideSettings: true,
  size: 28,
};
APC.electron = {
  titleBarStyle: "hiddenInset",
  trafficLightPosition: {
    x: 12,
    y: 10,
  },
};
APC["font.family"] = "Geist Mono";
APC["monospace.font.family"] = "Geist Mono";
APC.statusBar = {
  position: "editor-bottom",
  height: 28,
  fontSize: 12,
};

APC.stylesheet = {
  ".sidebar > .composite": "height: 12px !important",
  ".title-label": "display: none !important",
  ".title-actions": "display: none !important",
  ".tabs-and-actions-container > .editor-actions": "display: none !important",
  ".titlebar-center": "display: none !important",
  ".titlebar-right": "display: none !important",
  ".inline-tabs-placeholder": "display: none !important",
  ".split-view-view .visible": "background-color: #110f17 !important",
};

export default APC;
