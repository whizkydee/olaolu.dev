module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: [
          'es6.array.from',
          'es6.array.find',
          'es6.object.assign',
          'es6.array.find-index',
        ],
      },
    ],
  ],
}
