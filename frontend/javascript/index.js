/**
 * Main JavaScript entry point for Bridgetown esbuild bundling.
 *
 * This file is bundled by Bridgetown's esbuild integration and output to
 * output/_bridgetown/static/ with a hashed filename.
 *
 * Use `asset_path :js` in templates to reference the bundled output.
 *
 * Note: Theme toggle and mobile menu are handled inline in _header.erb
 * because they need immediate access to the Theme global and specific HTML.
 */

import { initRevealAnimations } from "./reveal-animations.js";
import { initTimelineFill } from "./timeline.js";
import { initReadingProgress } from "./reading-progress.js";

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();

  // Page-specific initialization based on data-page attribute
  const page = document.body.dataset.page;

  if (page === "index") {
    initTimelineFill();
  }

  if (page === "post") {
    initReadingProgress();
  }
});
