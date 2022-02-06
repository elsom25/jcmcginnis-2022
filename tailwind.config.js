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
      colors: {
        solarized: {
          100: '#fdf6e3',
          200: '#eee8d5',
          300: '#93a1a1',
          400: '#839496',
          500: '#657b83',
          600: '#586e75',
          700: '#073642',
          800: '#002b36',
        }
      },
      fontFamily: {
        'mono': '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
