const require = require("require");

const webpackConfig = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },
};
