import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const getFiles = require("./scripts/utils");
const packageJson = require("./package.json");
const extensions = [".js", ".ts", ".jsx", ".tsx", ".css", ".scss"];
const excludeExtensions = [
  "test.js",
  "test.ts",
  "test.jsx",
  "test.tsx",
  "stories.js",
  "stories.ts",
  "stories.jsx",
  "stories.tsx",
];

export default [
  {
    // input: ["src/index.ts", ...getFiles("./src/components", extensions, excludeExtensions)],
    input: ["src/index.ts", ...getFiles("./src/components", extensions, excludeExtensions)],
    output: [
      {
        // dir: packageJson.main,
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
      {
        // dir: packageJson.module,
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
      postcss({
        extract: true,
        inject: false,
        modules: true,
        autoModules: true,
        minimize: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es", sourcemap: false, exports: "named" }],
    plugins: [dts.default()],
  },
];
