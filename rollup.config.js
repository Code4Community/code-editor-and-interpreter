import { nodeResolve } from "@rollup/plugin-node-resolve";
import { lezer } from "@lezer/generator/rollup";

export default {
  input: "src/main.js",
  output: {
    file: "dist/main.bundle.js",
    format: "iife",
  },
  plugins: [nodeResolve(), lezer()],
};
