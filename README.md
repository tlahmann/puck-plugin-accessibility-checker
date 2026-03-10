# puck-plugin-accessibility-checker

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![npm version](https://img.shields.io/npm/v/puck-plugin-accessibility-checker.svg)](https://www.npmjs.com/package/puck-plugin-accessibility-checker)

A comprehensive accessibility checker plugin for [Puck Editor](https://puckeditor.com/) that integrates axe-core to identify and report accessibility issues directly within your editor interface.

### Peer Dependencies

This plugin requires the following peer dependencies:

- `@puckeditor/core` ^0.21.1
- `lucide-react` ^0.577.0
- `react` ^17.0.0 || ^18.0.0 || ^19.0.0

These are typically already installed if you're using Puck Editor.

## Usage

### Basic Setup

1. **Import the plugin and styles:**

Import the styles separately

```tsx
import { Puck } from '@puckeditor/core';
import accessibilityCheckerPlugin from 'puck-plugin-accessibility-checker';
import 'puck-plugin-accessibility-checker/styles.css';

function Editor() {
  return <Puck config={config} data={initialData} plugins={[accessibilityCheckerPlugin]} />;
}
```

## Development

### Building the Plugin

```bash
# Production build
npm run build

# Development mode with watch
npm run dev
```

Build outputs are generated in the `dist/` directory:

- `index.js` / `index.cjs` - Plugin code (ESM and CommonJS)
- `index.d.ts` / `index.d.cts` - TypeScript type definitions
- `styles.css` - Compiled stylesheet
- Source maps for all files

