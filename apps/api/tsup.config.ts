import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  noExternal: ["@repo"],
  splitting: false,
  bundle: true,
  outDir: "./api",
  clean: true,
  env: { IS_SERVER_BUILD: "true" },
  loader: { ".json": "copy" },
  minify: true,
  sourcemap: true,
  dts: {
    entry: "src/index.ts",
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
  },
});
