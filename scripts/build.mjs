import * as esbuild from 'esbuild';

const common = {
  bundle: true,
  sourcemap: true,
  target: ['es2022'],
  logLevel: 'info',
};

// Full bundle (core + component), CommonJS — for `require()` in Electron main/preload.
await esbuild.build({
  ...common,
  entryPoints: ['src/index.js'],
  outfile: 'dist/drp-datepicker.cjs.js',
  format: 'cjs',
  platform: 'neutral',
});

// Core-only, CommonJS — no DOM dependency, safe in Node main process.
await esbuild.build({
  ...common,
  entryPoints: ['src/core/nepali-calendar.js'],
  outfile: 'dist/drp-core.cjs.js',
  format: 'cjs',
  platform: 'neutral',
});

// Full bundle, ESM — for bundlers / <script type="module">.
await esbuild.build({
  ...common,
  entryPoints: ['src/index.js'],
  outfile: 'dist/drp-datepicker.esm.js',
  format: 'esm',
  platform: 'browser',
});

// Browser global (IIFE) — drop-in <script src="..."> with zero build tooling.
// Exposes `window.DRP = { DrpNepaliCalendar, DrpDatePicker, registerDrpDatePicker }`
// and auto-registers <drp-datepicker>.
await esbuild.build({
  ...common,
  entryPoints: ['src/index.js'],
  outfile: 'dist/drp-datepicker.global.js',
  format: 'iife',
  globalName: 'DRP',
  platform: 'browser',
  minify: true,
});

console.log('\nBuild complete -> dist/');
