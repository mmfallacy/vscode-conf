export const Bookmark = [
  {
    key: "m",
    name: "Mark...",
    type: "bindings",
    bindings: [
      {
        key: "c",
        name: "Clear Bookmarks",
        type: "command",
        command: "bookmarks.clear",
      },
      {
        key: "j",
        name: "Next Bookmark",
        type: "command",
        command: "bookmarks.jumpToNext",
        when: "editorTextFocus",
      },
      {
        key: "k",
        name: "Previous Bookmark",
        type: "command",
        command: "bookmarks.jumpToPrevious",
        when: "editorTextFocus",
      },
      {
        key: "l",
        name: "List Bookmarks",
        type: "command",
        command: "bookmarks.listFromAllFiles",
        when: "editorTextFocus",
      },
      {
        key: "r",
        name: "Refresh Bookmarks",
        type: "command",
        command: "bookmarks.refresh",
      },
      {
        key: "t",
        name: "Toggle Bookmark",
        type: "command",
        command: "bookmarks.toggle",
        when: "editorTextFocus",
      },
      {
        key: "s",
        name: "Show Bookmarks",
        type: "command",
        command: "workbench.view.extension.bookmarks",
      },
    ],
  },
];
