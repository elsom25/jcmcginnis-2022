/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
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
