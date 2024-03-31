/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/**/*.{md,html}",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.{md,html}",
    "./*.{md,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        sans: '"Source Sans 3", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
