const apc: Record<string, unknown> = {};

apc.activityBar = {
  position: "bottom",
  hideSettings: true,
  size: 28,
};
apc.electron = {
  titleBarStyle: "hiddenInset",
  trafficLightPosition: {
    x: 12,
    y: 10,
  },
};
apc["font.family"] = "Geist Mono";
apc["monospace.font.family"] = "Geist Mono";
apc.statusBar = {
  position: "editor-bottom",
  height: 28,
  fontSize: 12,
};

apc.stylesheet = {
  ".sidebar > .composite": "height: 12px !important",
  ".title-label": "display: none !important",
  ".title-actions": "display: none !important",
  ".tabs-and-actions-container > .editor-actions": "display: none !important",
  ".titlebar-center": "display: none !important",
  ".titlebar-right": "display: none !important",
  ".inline-tabs-placeholder": "display: none !important",
  ".split-view-view .visible": "background-color: #110f17 !important",
};

export const APC = { apc };
