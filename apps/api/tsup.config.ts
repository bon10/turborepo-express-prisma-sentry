import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["api/index.ts"],
  noExternal: ["@repo"],
  splitting: false,
  bundle: true,
  clean: false,
  env: { IS_SERVER_BUILD: "true" },
  loader: { ".json": "copy" },
  minify: true,
  sourcemap: true,
  outDir: "api",
  dts: {
    entry: "api/index.ts",
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
  },
});
