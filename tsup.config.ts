import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.tsx",
    styles: "src/styles.css",
  },
  format: ["cjs", "esm"],
  dts: {
    entry: "src/index.tsx",
  },
  sourcemap: true,
  clean: true,
  minify: false,
  treeshake: true,
  splitting: false,
  external: [
    "react",
    "react-dom",
    "@puckeditor/core",
    "@dnd-kit/react",
    "@dnd-kit/dom",
    "@dnd-kit/abstract",
    "@dnd-kit/state",
    "@dnd-kit/geometry",
    "@dnd-kit/utilities",
    "lucide-react",
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
