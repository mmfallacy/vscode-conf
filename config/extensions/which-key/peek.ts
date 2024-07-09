export const Peek = [
  {
    key: "p",
    name: "Peek...",
    type: "bindings",
    bindings: [
      {
        key: "d",
        name: "Definition",
        type: "command",
        command: "editor.action.peekDefinition",
        when: "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
      },
      {
        key: "D",
        name: "Declaration",
        type: "command",
        command: "editor.action.peekDeclaration",
      },
      {
        key: "i",
        name: "Implementation",
        type: "command",
        command: "editor.action.peekImplementation",
        when: "editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
      },
      {
        key: "p",
        name: "Toggle Focus",
        type: "command",
        command: "togglePeekWidgetFocus",
        when: "inReferenceSearchEditor || referenceSearchVisible",
      },
      {
        key: "r",
        name: "References",
        type: "command",
        command: "editor.action.referenceSearch.trigger",
      },
      {
        key: "t",
        name: "Type Definition",
        type: "command",
        command: "editor.action.peekTypeDefinition",
      },
    ],
  },
];
