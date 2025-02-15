import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDeps from "rollup-plugin-peer-deps-external";
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
        sourcemap: true,
        exports: "named",
      },
      {
        // dir: packageJson.module,
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        use: ["sass"],
        modules: true,
        extract: true,
      }),
      terser(),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es", sourcemap: true, exports: "named" }],
    plugins: [dts.default()],
  },
];
