module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_variables.sass"',
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Movie Library',
    },
  },
};
