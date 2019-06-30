import babel from 'rollup-plugin-babel';

export default {
  input: 'src/country-code-to-flag.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [babel({
    babelrc: false,
    presets: [[
      "@babel/env",
      {
        targets: {
          "browsers": ["last 2 versions", "ie >= 11"]
        },
      },
    ]],
  }),]
};