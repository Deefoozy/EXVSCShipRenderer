# EXVSCShipRenderer

A JavaScript library with a high-performance build setup using esbuild for minification.

## Features

- **Ultra-fast builds** - Uses [esbuild](https://esbuild.github.io/), one of the fastest JavaScript bundlers
- **Multiple output formats** - ESM, CommonJS, and browser-ready IIFE bundles
- **Source maps** - Included for debugging minified code
- **Watch mode** - For development with automatic rebuilds

## Installation

```bash
npm install
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all formats (ESM, CJS, Browser) with minification |
| `npm run build:esm` | Build minified ES Module format |
| `npm run build:cjs` | Build minified CommonJS format |
| `npm run build:browser` | Build minified browser bundle (IIFE) |
| `npm run build:dev` | Build without minification (for development) |
| `npm run watch` | Watch mode - rebuilds on file changes |
| `npm run clean` | Remove dist directory |

## Output Files

After running `npm run build`, the `dist/` directory will contain:

- `index.esm.js` - ES Module format (for modern bundlers)
- `index.cjs.js` - CommonJS format (for Node.js)
- `index.browser.js` - Browser bundle (globally available as `ShipRenderer`)
- `*.map` - Source maps for debugging

## Usage

### ES Modules

```javascript
import { ShipRenderer } from 'exvscshiprenderer';

const renderer = new ShipRenderer({ width: 1024, height: 768 });
renderer.init();
```

### CommonJS

```javascript
const { ShipRenderer } = require('exvscshiprenderer');

const renderer = new ShipRenderer();
renderer.init();
```

### Browser

```html
<script src="dist/index.browser.js"></script>
<script>
  const renderer = new ShipRenderer.ShipRenderer();
  renderer.init();
</script>
```

## Project Structure

```
├── src/
│   ├── index.js      # Entry point
│   └── utils.js      # Utility functions
├── dist/             # Build output (generated)
├── package.json
└── README.md
```

## Why esbuild?

esbuild is chosen as the build tool because:

1. **Performance** - 10-100x faster than traditional bundlers
2. **Zero configuration** - Works out of the box with sensible defaults
3. **Built-in minification** - No need for additional tools like Terser
4. **Native source maps** - Integrated source map generation
5. **No task runner overhead** - Uses npm scripts directly, avoiding Grunt/Gulp complexity