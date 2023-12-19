import ts from "rollup-plugin-ts";
import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";

const production = process.env.BUILD === "production";

export default {
  input: "src/index.ts",
  output: {
    dir: "build",
    name: "PAMeta",
    format: "umd",
    globals: {
      "pa-common": "PACommon",
    },
  },
  plugins: [
    ts(),
    production &&
      del({
        targets: ["build"],
      }),
    production && terser(),
  ],
  external: ["pa-common"],
};
