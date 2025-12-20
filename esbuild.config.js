import * as esbuild from "esbuild"
import { glob } from "glob"
import path from "path"

// Get all component JS files
const componentsDir = path.join(process.cwd(), "src", "_components")

const isWatch = process.argv.includes("--watch")

const esbuildOptions = {
  entryPoints: ["./frontend/javascript/index.js"],
  outdir: "output/_bridgetown/static",
  bundle: true,
  splitting: true,
  format: "esm",
  minify: process.env.BRIDGETOWN_ENV === "production",
  sourcemap: true,
  loader: {
    ".css": "css",
  },
  logLevel: "info",
}

if (isWatch) {
  const context = await esbuild.context(esbuildOptions)
  await context.watch()
  console.log("esbuild is watching for changes...")
} else {
  await esbuild.build(esbuildOptions)
}

