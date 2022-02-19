module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.{md,html}',
    './blog/index.html',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
