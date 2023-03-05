import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
};
