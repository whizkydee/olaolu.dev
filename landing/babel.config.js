module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: [
          'es6.array.from',
          'es6.array.find',
          'es7.array.includes',
          'es6.object.assign',
          'es6.string.includes',
          'es6.array.find-index',
        ],
      },
    ],
  ],
}
