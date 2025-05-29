import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BjBhjGZp.js";import{M as a,c as d}from"./index-ditKiaI4.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BOOIFqh_.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const i=`<h4 className="margin-btm-8">Release Notes</h4>

## 1.3.1

### Patch Changes

- Fixes to Typescript types
- Updated dependencies
  - @nonfx/flow-core@4.0.7
  - @nonfx/flow-core-config@1.3.1

## 1.3.0

### Minor Changes

- Migrate to latest lit and general refactoring

### Patch Changes

- Updated dependencies
  - @nonfx/flow-core-config@1.3.0
  - @nonfx/flow-core@4.0.0

# Change Log

## [1.2.0] - 2024-09-27

### Minor changes

- Only exports an ESM build. Any modern bundler in 2024 will work with it.

## [1.1.1] - 2024-07-08

### Patch Changes

- \`vue\` component types updated.

## [1.1.0] - 2023-11-27

### Minor Changes

- \`lit\` upgraded to v3.

## [1.0.3] - 2023-10-12

### Patch Changes

- Remove sideEffects because the components require registration via import
- Updated dependencies
- \`@nonfx/flow-core-config@1.1.3\`
- \`@nonfx/flow-core@2.0.3\`

## [1.0.2] - 2023-10-10

### Patch Changes

- a2de106: Fix platform types
- Updated dependencies [a2de106]
- \`@nonfx/flow-core-config@1.1.1\`
- \`@nonfx/flow-core@2.0.1\`

## [1.0.1-beta.0] - 2023-10-10

### Patch Changes

- Fix platform types
- Updated dependencies
- \`@nonfx/flow-core-config@1.1.1-beta.0\`
- \`@nonfx/flow-core@2.0.1-beta.0\`

## [1.0.0] - 2023-10-10

### Minor Changes

- Migrated to monorepo structure and removed the need for custom CSS

### Patch Changes

- Updated dependencies
- \`@nonfx/flow-core@2.0.0\`
<hr className="margin-btm-32" />

## [0.2.0] - 2023-08-03

### Features

- \`title\` prop added to display title in the header.
- \`comments\` prop added to display comment toggling button in the header.
- \`copy-button\` prop added to display copy button in the header, which on click copies the entire code.
- \`show-line-numbers\` prop added to toggle line no.'s'.
- \`state\` prop introduced, for changing the background-color of the code-editor.
- \`read-only\` prop added for edit and read-only mode in code-editor.

## [0.1.0] - 2023-06-09

### Features

- \`content-change\` event added to listen on updates in editor.

## [0.0.9] - 2023-05-30

### Note

- This package uses \`Workers\` so please go though installation instruction from [README](https://github.com/nonfx/flow-core/blob/main/packages/flow-code-editor/README.md)

### Improvements

- First release
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@nonfx/flow-code-editor/Release Notes"}),`
`,n.jsx(d,{children:i})]})}function x(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{x as default};
